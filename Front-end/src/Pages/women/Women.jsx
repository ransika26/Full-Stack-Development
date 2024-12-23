import React from "react";
import "./women.css";
import Category from "../../Components/category/Category";
import Search from "../../Components/search/Search";

const Women = () => {
  return (
    <div>
      {/* Section women */}
      <section className="section-women"></section>
      {/* Search bar */}
      <Search />
      {/* Category section */}
      <Category />
    </div>
  );
};

export default Women;
