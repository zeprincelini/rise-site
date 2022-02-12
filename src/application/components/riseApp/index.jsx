import phoneTwo from "../../../assets/img/phone-2.png";
import "./index.css";

const RiseApp = () => {
  return (
    <div className="app-container">
      <div className="app-left">
        <div className="phone-2">
          <img src={phoneTwo} alt="phone image" />
        </div>
      </div>
      <div className="app-right">
        <p className="app-title">The Rise App</p>
        <div className="app-header">
          <p>
            Save for your <span>future</span>
          </p>
        </div>
        <div className="app-text">
          With Rise, you achieve your financial goals faster. Save <br /> for
          school, your home, vacations, your children&apos;s <br /> future and
          more.
        </div>
        <div className="app-button">
          <button>Start Saving</button>
        </div>
      </div>
    </div>
  );
};

export default RiseApp;
