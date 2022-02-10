import { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import { ReactComponent as Down } from "../../../assets/svg/down-icon.svg";

import "./nav.css";

const Navigation = () => {
  const [dropdown, setDropdown] = useState(false);
  const open = useCallback(() => {
    setDropdown(!dropdown);
  }, [dropdown]);

  return (
    <div className="nav-container">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <div className="nav-item" onClick={() => open()}>
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
