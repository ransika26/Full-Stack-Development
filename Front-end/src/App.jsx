import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nav-bar/Navbar";
import Footer from "./Components/footer/Footer";
import Seller_nav from "./Components/seller_components/seller_nav-bar/Seller_nav";
import Account from "./Pages/account/Account";
import Cart from "./Pages/cart/Cart";
import Contact from "./Pages/contact/Contact";
import Home from "./Pages/home/Home";
import Hot from "./Pages/hot/Hot";
import Login from "./Pages/login/Login";
import Men from "./Pages/men/Men";
import Offers from "./Pages/offers/Offers";
import Product_details from "./Pages/product_details/Product_details";
import Search from "./Pages/search_page/Search_page";
import Add_product from "./Pages/seller/add_product/Add_product";
import Chat from "./Pages/seller/chat/Chat";
import Delivered from "./Pages/seller/delivered/Delivered";
import EditProduct from "./Pages/seller/edit_product/Edit_product";
import New_orders from "./Pages/seller/new_orders/New_orders";
import Seller_home from "./Pages/seller/seller_home/Seller_home";
import Seller_login from "./Pages/seller/seller_login/Seller_login";
import Seller_profile from "./Pages/seller/seller_profile/Seller_profile";
import Seller_signup from "./Pages/seller/seller_signup/Seller_signup";
import Signup from "./Pages/signup/Signup";
import Wish_list from "./Pages/wish_list/Wish_list";
import Women from "./Pages/women/Women";

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Routes>
        {["/", "/Men", "/Women", "/Offers", "/Hot", "/Contact", "/Wish_list", "/Cart", "/Account", "/Search", "/Product_details"].map((path) => (
          <Route key={path} path={path} element={<Navbar />} />
        ))}
        {["/Add_product", "/Seller_home", "/Chat", "/New_orders", "/Delivered", "/Seller_profile", "/editproduct"].map((path) => (
          <Route key={path} path={path} element={<Seller_nav />} />
        ))}
      </Routes>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Hot" element={<Hot />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Wish_list" element={<Wish_list />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Seller_login" element={<Seller_login />} />
        <Route path="/Seller_signup" element={<Seller_signup />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/product-details" element={<Product_details />} />
        <Route path="/Add_product" element={<Add_product />} />
        <Route path="/Seller_home" element={<Seller_home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/New_orders" element={<New_orders />} />
        <Route path="/Delivered" element={<Delivered />} />
        <Route path="/Seller_profile" element={<Seller_profile />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/editproduct" element={<EditProduct />} />
      </Routes>

      {/* Footer */}
      <Routes>
        {["/", "/Men", "/Women", "/Offers", "/Hot", "/Contact", "/Wish_list", "/Cart", "/Account", "/Search", "/Product_details", "/Add_product", "/Seller_home", "/Chat", "/New_orders", "/Delivered", "/Seller_profile", "/editproduct"].map((path) => (
          <Route key={path} path={path} element={<Footer />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
