import express from "express";
import ECommerceModel from "../models/Product_add_platform.js"; // Adjust the path to match your file structure

const router = express.Router();

// Search products
router.get("/search", async (req, res) => {
  const { query } = req.query;
  console.log("Search Query Received:", query); // Log incoming query

  try {
    // Search for products matching the query
    const results = await ECommerceModel.find({
      ProductName: { $regex: query, $options: "i" },
    });
    console.log("Search Results:", results); // Log search results

    // Send results as a response
    res.status(200).json(results);
  } catch (error) {
    console.error("Error during search:", error); // Log any errors

    // Respond with an error message
    res.status(500).json({ message: "Error fetching search results" });
  }
});

export default router;
