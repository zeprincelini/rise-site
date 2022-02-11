import review_one from "../../../assets/img/reviewer-1.png";
import review_two from "../../../assets/img/reviewer-2.png";
import "./reviews.css";

const Reviews = () => {
  return (
    <div className="review-container">
      <div className="review-header">
        <p className="review-title">From The People Who Use Rise</p>
        <p className="review-subtitle">
          Our mission at Risevest is to empower more people just like you <br />{" "}
          to achieve your personal financial goals.
        </p>
      </div>
      <div className="review-body">
        <div className="review">
          <p className="review-text">
            I don&apos;t want to invest in separate stocks because <br />{" "}
            I&apos;m not a financial expert and I would rather trust <br /> my
            money in the hands of people like Rise who are <br /> skilled and
            knowledgeable.
          </p>
          <div className="reviewer">
            <img src={review_one} alt="reviewer" />
            <p>Lade</p>
          </div>
        </div>
        <div className="review">
          <p className="review-text">
            I don&apos;t want to invest in separate stocks because <br />{" "}
            I&apos;m not a financial expert and I would rather trust <br /> my
            money in the hands of people like Rise who <br /> are skilled and
            knowledgeable.
          </p>
          <div className="reviewer">
            <img src={review_one} alt="reviewer" />
            <p>Jesse</p>
          </div>
        </div>
        <div className="review">
          <p className="review-text">
            I chose Rise because of its leadership, <br /> wealth of knowledge
            and the people who <br /> support them. I invest with Rise in order
            to <br /> protect my savings and investment from <br /> being
            depleted by devaluation and inflation <br /> tha&apos;s at an
            all-time high in Nigeria.
          </p>
          <div className="reviewer">
            <img src={review_two} alt="reviewer" />
            <p>Raye</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
