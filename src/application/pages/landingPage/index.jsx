import HeroSection from "../../components/hero/hero";
import arm from "../../../assets/img/arm.png";
import "./index.css";
import Invest from "../../components/invest/invest";
import Asset from "../../components/asset/asset";
import RiseApp from "../../components/riseApp";
import Reviews from "../../components/reviews/reviews";
import Join from "../../components/join/join";
import AppAdvert from "../../components/appAdvert/appAd";

const LandingPage = () => {
  return (
    <>
      <div className="main-wrapper">
        <HeroSection />
        <div className="sponsors-container">
          <div>
            <img src={arm} alt="western union" />
          </div>
        </div>
        <Invest />
        <Asset />
        <RiseApp />
      </div>
      <div className="regulated-container">
        <div className="regulated-wrapper">
          <div className="regulated-left">
            <div className="regulated-left-top"></div>
            <div className="regulated-left-bottom"></div>
          </div>
          <div className="regulated-mid">
            <p className="regulated-header">How we are Regulated</p>
            <p className="regulated-body">
              Rise is registered and regulated both in the US and in Nigeria.
              Our <br />
              team is made up of US registered investment advisers, our <br />{" "}
              Nigerian users are covered by our SEC licensed trustees, ARM{" "}
              <br /> Trustees and all our assets are held with regulated third
              parties, in <br />
              all relevant jurisdictions
            </p>
          </div>
          <div className="regulated-right">
            <div className="regulated-right-top"></div>
            <div className="regulated-right-bottom"></div>
          </div>
        </div>
      </div>
      <Reviews />
      <div className="main-wrapper">
        <Join />
        <AppAdvert />
      </div>
    </>
  );
};

export default LandingPage;
