import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/svg/footer-logo.svg";
import { ReactComponent as ArrowDiagonal } from "../../../assets/svg/arrow-diagonal.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-list-wrapper">
          <div className="footer-list">
            <Logo />
            <Link to="/about">About Us</Link>
            <Link to="#">Careers</Link>
            <Link to="#">FAQs</Link>
            <Link to="#">Contact Info</Link>
            <Link to="#">Press</Link>
            <Link to="#">Rise Impact</Link>
          </div>
          <div className="footer-list">
            <p>Explore</p>
            <Link to="#">
              <div>
                <span>Investmet Club</span>
                <ArrowDiagonal />
              </div>
            </Link>
            <Link to="#">
              <div>
                <span>Blog</span>
                <ArrowDiagonal />
              </div>
            </Link>
          </div>
        </div>
        <div className="footer-list-wrapper">
          <div className="footer-list">
            <p>Products</p>
            <Link to="#">Rise App</Link>
            <Link to="#">Wallets</Link>
            <Link to="#">Asset Classes</Link>
          </div>
          <div className="footer-list">
            <p>Contact Us</p>
            <Link to="#">
              <div>
                <span>0818 714 7405</span>
                <ArrowDiagonal />
              </div>
            </Link>
            <Link to="#">
              <div>
                <span>hello@rise.capital</span>
                <ArrowDiagonal />
              </div>
            </Link>
            <Link to="#">
              <div>
                <span>Newsletter</span>
                <ArrowDiagonal />
              </div>
            </Link>
            <Link to="#">
              <div>
                <span>Instagram</span>
                <ArrowDiagonal />
              </div>
            </Link>
            <Link to="#">
              <div>
                <span>Twitter</span>
                <ArrowDiagonal />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
