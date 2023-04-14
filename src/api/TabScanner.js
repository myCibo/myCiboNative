import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const API_BASE_URL = "https://api.tabscanner.com";
const API_VERSION = "2";
const API_KEY = process.env.TABSCANNER_API_KEY;
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
            "You are an AI that processes and cleans receipt data. Clean the names of the given line items to focus on the core food item (e.g., 'SGM SPAGHETTI PASTA' -> 'Spaghetti Pasta'). Exclude non-food items. Then generate the default shelf life(in days), category (produce, dairy, proteins, grains, nuts, baking, condiments, spices, beverages), and default unit (ounce, teaspoon, pound, milligram, count, milliliter, pint, gallon, liter, gram, kilogram, quart, cup, tablespoon) for each item. Return a JSON object in the format: {lineItems: [{ name, defaultUnit, category, defaultShelfLife }, ...]}.",
        },
        {
          role: "assistant",
          content:
            "Understood. I will clean the names, remove non-food items, and generate the default shelf life, category, and default unit for each item. Please provide the receipt line items in JSON format.",
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
        console.log(response.data, "LOOK AT ME");
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
