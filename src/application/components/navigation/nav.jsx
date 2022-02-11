import { useState, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import { ReactComponent as Down } from "../../../assets/svg/arrow-down.svg";

import "./nav.css";

const Navigation = () => {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const open = useCallback(() => {
    setDropdown(!dropdown);
  }, [dropdown]);

  const path = ["/stock", "/estate", "income", "/wealth"];

  return (
    <div className="nav-container">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <div
          className={`nav-item ${
            path.includes(location.pathname) ? "active" : ""
          }`}
          onClick={() => open()}
        >
          <span>Products</span>
          <Down />
          {dropdown && (
            <div className="dropdown">
              <NavLink to="/stock">Stocks</NavLink>
              <NavLink to="/estate">Real Estate</NavLink>
              <NavLink to="/income">Fixed Income</NavLink>
              <NavLink to="/wealth">Build Wealth</NavLink>
            </div>
          )}
        </div>
        <NavLink to="/investment" className="nav-item">
          Investment Club
        </NavLink>
        <NavLink to="/blog" className="nav-item">
          Blog
        </NavLink>
        <NavLink to="/about" className="nav-item">
          About Us
        </NavLink>
        <NavLink to="/faq" className="nav-item">
          FAQS
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
