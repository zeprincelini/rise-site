import join from "../../../assets/img/join.png";
import "./join.css";

const Join = () => {
  return (
    <div className="join-container">
      <div className="join-left">
        <div className="join-header">
          <p className="join-title">Join The Rise Community</p>
          <p className="join-text">
            If you want to go far, go together. Our Telegram community <br />{" "}
            surrounds you with others who can help you along your financial{" "}
            <br /> journey with tips, support, advice and learning. It's
            completely <br /> free and open to new and seasoned investors.
          </p>
        </div>
        <div className="join-button">
          <button>Join our Community</button>
        </div>
      </div>
      <div className="join-right">
        <img src={join} alt="join our community img" />
      </div>
    </div>
  );
};

export default Join;
