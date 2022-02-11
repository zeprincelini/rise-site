import HeroSection from "../../components/hero/hero";
import arm from "../../../assets/img/arm.png";
import "./index.css";
import Invest from "../../components/invest/invest";
import Asset from "../../components/asset/asset";

const LandingPage = () => {
  return (
    <div className="container">
      <HeroSection />
      <div className="sponsors-section">
        <div>
          <img src={arm} alt="western union" />
        </div>
      </div>
      <Invest />
      <Asset />
    </div>
  );
};

export default LandingPage;
