import axios from "axios";

const API_BASE_URL = "https://api.tabscanner.com";
const API_VERSION = "2";
const API_KEY = "WBjJLE3VsHm7ZONfQG8yxn7RGjPLxg3G43K9p59y0oaZuE1607lTtIlSIvK0N0SF";

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
            'apikey': API_KEY
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

  async getReceiptData(token) {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/result/${token}`, {
        headers: {
          'apikey': API_KEY
        },
      }
      );
      if (response.data.status === "done") {
        return response.data;
      } else if (response.data.status === "pending") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return this.getReceiptData(token);
      } else {
        return "Read failed. SOS. Not poggers."
      }
    } catch (error) {
      console.error("Error getting receipt data:", error);
      throw error;
    }
  },
};

export default TabScanner;