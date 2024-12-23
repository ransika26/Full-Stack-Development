import cors from "cors";
import express from "express";
import { connectDB } from "./config/db.js";
import AdmincontactRouter from "./routes/Admin_contact_routes.js";
import AskQuestionsRouter from "./routes/Ask_questions_routes.js";
import CustomerAuthenticationRouter from "./routes/Customer_authentication_routes.js";
import Display from "./routes/Home_product_display_routes.js";
import PendingCartRouter from "./routes/Pending_cart_routes.js";
import ECommerceRouter from "./routes/Product_add_routes.js";
import Productdetails from "./routes/Product_details_routes.js";
import Update from "./routes/Product_edit_routes.js";
import searchRoutes from "./routes/SearchRoutes.js";
import ProductDisplayRouter from "./routes/Seller_all_products_routes.js";
import SellerAuthenticationRouter from "./routes/Seller_authentication_routes.js";
import Delete from "./routes/Seller_product_de_ed_routes.js";
import Questions from "./routes/Show_questions_routes.js";
import WishlistRouter from "./routes/Wish_list_routes.js";

const app = express();
const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT; // Dynamically set the port

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Connection to MongoDB
connectDB();

// API Endpoints
app.use("/api/ecommerceproduct", ECommerceRouter); // Product add
app.use("/api/ecommerceproductedit", Update); // Product update
app.use("/api/sellerauthentication", SellerAuthenticationRouter); // Seller authentication
app.use("/api/customerauthentication", CustomerAuthenticationRouter); // Customer authentication
app.use("/api/admincontact", AdmincontactRouter); // Admin contact
app.use("/api/wishlist", WishlistRouter); // Wish list
app.use("/api/productssellerdisplay", ProductDisplayRouter); // Product seller display
app.use("/api/productsdelete", Delete); // Product delete
app.use("/api/productsdisplay", Display); // Product display
app.use("/api/pendingcart", PendingCartRouter); // Product add cart
app.use("/api/productsdetailsdisplay", Productdetails); // Product details display
app.use("/api/productsaskquestions", AskQuestionsRouter); // Product ask questions
app.use("/api/productsshowquestions", Questions); // Product show questions
app.use("/api/products", searchRoutes); // Search products

// Root endpoint
app.get("/", (req, res) => {
  res.send("Good to go");
});

// Start server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
}).on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use.`);
    process.exit(1); // Exit with failure
  } else {
    console.error("Server error:", err);
  }
});