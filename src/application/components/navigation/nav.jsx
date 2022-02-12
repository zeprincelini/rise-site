import { useState, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import { ReactComponent as Down } from "../../../assets/svg/arrow-down.svg";
import { ReactComponent as Menu } from "../../../assets/svg/menu.svg";
import { ReactComponent as Close } from "../../../assets/svg/close.svg";
import { ReactComponent as ArrowDown } from "../../../assets/svg/drop-down.svg";

import "./nav.css";

const Navigation = () => {
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const open = useCallback(() => {
    setDropdown(!dropdown);
  }, [dropdown]);

  const [mobileDropdown, setMobileDropdown] = useState(false);
  const openMobile = useCallback(() => {
    setMobileDropdown(!mobileDropdown);
  }, [mobileDropdown]);

  const [mobileNav, setMobileNav] = useState(false);
  const toggleNav = useCallback(() => {
    setMobileNav(!mobileNav);
  }, [mobileNav]);

  const path = ["/stock", "/estate", "income", "/wealth"];

  return (
    <div className="nav-container">
      <div className="logo">
        <Logo />
      </div>
      <div className="menu">
        <Menu onClick={() => toggleNav()} />
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
      <div
        className="mobile-nav-container"
        style={{ display: mobileNav ? "block" : "none" }}
      >
        <div className="mobile-nav-header">
          <Logo />
          <Close className="closeIcon" onClick={() => toggleNav()} />
        </div>
        <div className="mobile-nav-links">
          <NavLink to="/" className="mobile-nav-item">
            Home
          </NavLink>
          <div className="mobile-nav-item">
            <div className="modify" onClick={() => openMobile()}>
              <span>Products</span>
              <ArrowDown color="#2d2d2d" />
            </div>
            <div
              className="mobile-dropdown"
              style={{ display: mobileDropdown ? "flex" : "none" }}
            >
              <NavLink to="/stocks" className="mobile-nav-item">
                Stocks
              </NavLink>
              <NavLink to="/estate" className="mobile-nav-item">
                Real Estate
              </NavLink>
              <NavLink to="/income" className="mobile-nav-item">
                Fixed Income
              </NavLink>
              <NavLink to="/wealth" className="mobile-nav-item">
                Build Wealth
              </NavLink>
            </div>
          </div>
          <NavLink to="/invest" className="mobile-nav-item">
            Investment Club
          </NavLink>
          <NavLink to="/about" className="mobile-nav-item">
            About Us
          </NavLink>
          <NavLink to="/faq" className="mobile-nav-item">
            FAQs
          </NavLink>
          <NavLink to="/blog" className="mobile-nav-item">
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
