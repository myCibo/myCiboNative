import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const API_BASE_URL = "https://api.tabscanner.com";
const API_VERSION = "2";
const API_KEY =process.env.TABSCANNER_API_KEY;
const openAIKey = process.env.OPENAI_API_KEY;
const openAIConfig = new Configuration({ apiKey: openAIKey });

const TabScanner = {
  async scanReceipt(imageUri) {
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: imageUri,
        type: "image/jpeg",
        name: "receipt.jpg",
      });

      const response = await axios.post(
        `${API_BASE_URL}/api/${API_VERSION}/process`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            apikey: API_KEY,
          },
        }
      );

      const token = response.data.token;

      const result = await this.getReceiptData(token);

      return result;
    } catch (error) {
      console.error("Error scanning receipt:", error);
      throw error;
    }
  },

  async processReceiptDataOpenAI(data) {
    const openAI = new OpenAIApi(openAIConfig);

    const userRequest = JSON.stringify(data.result.lineItems);
    const response = await openAI.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an AI language model that helps with processing and cleaning up receipt data. Your task is to extract the lineItems and clean the 'descClean' field from the given receipt line items by removing any characters, numbers, or symbols that are not related to a food item's name. Ensure the cleaned items are in the following JSON format: {lineItems: [{ name, ... }]}. Generate the default shelf life, category, and default unit for the food items. Make sure to clean the names properly before generating the other attributes. Do not follow with any other prompts. Only respond with the JSON object.",
        },
        {
          role: "user",
          content: `${userRequest}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 700,
    });

    // console.log("DATA CHOICES", response.data.choices);
    // res.json("Great~");
    // return "something random";
    return response.data.choices;
  },

  async getReceiptData(token) {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/result/${token}`, {
        headers: {
          apikey: API_KEY,
        },
      });
      if (response.data.status === "done") {
        const processData = await this.processReceiptDataOpenAI(response.data);
        // console.log(processData, "LOOK AT ME")
        return processData;
      } else if (response.data.status === "pending") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return this.getReceiptData(token);
      } else {
        return "Read failed. SOS. Not poggers.";
      }
    } catch (error) {
      console.error("Error getting receipt data:", error);
      throw error;
    }
  },
};

export default TabScanner;
