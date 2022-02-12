import { useRef } from "react";
import { useIntersect } from "../../shared/hooks/useIntersect";

import { ReactComponent as Apple } from "../../../assets/svg/apple-store.svg";
import { ReactComponent as Android } from "../../../assets/svg/android-store.svg";
import phoneTwo from "../../../assets/img/phone.png";
import "./appAd.css";

const AppAdvert = () => {
  const adRef = useRef();
  const show = useIntersect(adRef);
  return (
    <div className="app-ad-container" ref={adRef}>
      <div className="app-ad-left">
        <p className="app-ad-title">Download The Rise App</p>
        <p className={`app-ad-heading ${show ? "app-ad-heading-animate" : ""}`}>
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
        <img
          src={phoneTwo}
          alt="rise app"
          className={`app-ad-phone ${show ? "app-ad-phone-animate" : ""}`}
        />
      </div>
    </div>
  );
};

export default AppAdvert;
