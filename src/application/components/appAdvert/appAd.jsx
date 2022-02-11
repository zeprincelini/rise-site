import { ReactComponent as Apple } from "../../../assets/svg/apple-store.svg";
import { ReactComponent as Android } from "../../../assets/svg/android-store.svg";
import { ReactComponent as Phone } from "../../../assets/svg/phone.svg";
import "./appAd.css";

const AppAdvert = () => {
  return (
    <div className="app-ad-container">
      <div className="app-ad-left">
        <p className="app-ad-title">Download The Rise App</p>
        <p className="app-ad-heading">
          Join our 100,000 users investing <br /> and setting long term goals!
        </p>
        <p className="app-ad-subtitle">
          Dollar investments that help you grow.
        </p>
        <div className="app-ad-store">
          <Apple className="apple" />
          <Android className="android" />
        </div>
      </div>
      <div className="app-ad-right">
        <Phone className="app-ad-phone" />
      </div>
    </div>
  );
};

export default AppAdvert;
