import React, { useState } from "react";
import Search from "../search/Search";
import { useGetSearchProductsQuery } from "../../context/api/ProductsApi";

const Header = () => {
  //   const [showSearch, setShowSearch] = useState(false);
  const [value, setValue] = useState("");
  const { data } = useGetSearchProductsQuery({ q: value });
  //   console.log(data);
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <h1>LOGO</h1>
          </div>

          <div className="search">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              //   onFocus={() => setShowSearch(true)}
              //   onBlur={() => setShowSearch(false)}
              type="text"
              placeholder="Search..."
            />
            {value.trim() ? <Search data={data?.products} /> : <></>}
          </div>

          <div className="nav__items">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
