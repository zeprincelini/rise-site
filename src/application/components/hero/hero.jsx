import { ReactComponent as Apple } from "../../../assets/svg/apple-store.svg";
import { ReactComponent as Android } from "../../../assets/svg/android-store.svg";
import { ReactComponent as Phone } from "../../../assets/svg/phone.svg";
import "./hero.css";
import Bubble from "../hero-bubble/bubble";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <Bubble />
      <div className="hero-left">
        <p className="hero-header">
          Dollar investments <br /> that help you grow
        </p>
        <p className="hero-text">
          We put your money in high quality assets that help <br /> you build
          wealth and achieve your financial goals.
        </p>
        <div className="app-store">
          <Apple className="apple" />
          <Android className="android" />
        </div>
      </div>
      <div className="hero-right">
        <div className="phone">
          <Phone />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
