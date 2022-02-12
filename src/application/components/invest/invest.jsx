import { Link } from "react-router-dom";

import { ReactComponent as Woman } from "../../../assets/svg/woman.svg";
import { ReactComponent as WomanTwo } from "../../../assets/svg/woman2.svg";
import { ReactComponent as WomanThree } from "../../../assets/svg/woman3.svg";
import { ReactComponent as Man } from "../../../assets/svg/man.svg";
import { ReactComponent as ArrowRight } from "../../../assets/svg/arrow-right.svg";
import "./invest.css";

const Invest = () => {
  return (
    <div className="invest-container">
      <div className="feature">
        <div className="feature-left">
          <p className="feature-title">Invest your money in dollars</p>
          <p className="feature-body">
            By holding your investments in a stable <br /> currency, your money
            grows more over <br /> time and retains its value better.
          </p>
          <p className="feature-title-mobile">Superior Performance</p>
          <p className="feature-body-mobile">
            Rise outperforms your other alternatives in two ways. The first is
            through our expert, algorithm driven investment approach that picks
            through over 3,000 data sets to find the perfect investment for you.
          </p>
          <Link to="#" className="feature-link">
            <p>Start Investing Now</p>
            <ArrowRight width={15} height={15} className="arrow-right" />
          </Link>
        </div>
        <div className="feature-right">
          <Woman />
          <div className="feature-right-extra nudge-1"></div>
        </div>
      </div>
      <div className="feature-reverse">
        <div className="feature-left">
          <p className="feature-title">Choose what&apos;s best for you</p>
          <p className="feature-body">
            Unlike other platforms, Rise lets you pick between <br /> stocks, US
            real estate and fixed income, according to <br /> your risk
            appetite. That way you can spread your risk and <br /> tap into
            different investments all in one place.
          </p>
          <p className="feature-title-mobile">Personalization</p>
          <p className="feature-body-mobile">
            No two people are the same, and everyone&apos;s financial goals are
            different. Rise understands this, which is why we tailor your
            journey to financial freedom to fit you.
          </p>
          <Link to="#" className="feature-link">
            <p>Start Investing Now</p>
            <ArrowRight width={15} height={15} className="arrow-right" />
          </Link>
        </div>
        <div className="feature-right">
          <WomanTwo />
          <div className="feature-right-extra nudge-2"></div>
        </div>
      </div>
      <div className="feature">
        <div className="feature-left">
          <p className="feature-title">Set goals and reach them</p>
          <p className="feature-body">
            You can invest towards a goal on Rise--retirement, higher <br />{" "}
            education, save for your home or travel budgets. Or create <br /> a
            goal of your own and invest periodically to achieve them.
          </p>
          <p className="feature-title-mobile">Diversification</p>
          <p className="feature-body-mobile">
            Rise offers a choice of three asset classes: US equities, US real
            estate and fixed income assets to provide stability to your
            investments and protection from market declines. You can pick one
            asset class or
          </p>
          <Link to="#" className="feature-link">
            <p>Start Investing Now</p>
            <ArrowRight width={15} height={15} className="arrow-right" />
          </Link>
        </div>
        <div className="feature-right">
          <WomanThree />
          <div className="feature-right-extra"></div>
        </div>
      </div>
      <div className="feature-reverse male-feature">
        <div className="feature-left">
          <p className="feature-title">We remember so you don&apos;t have to</p>
          <p className="feature-body">
            Our Auto-invest feature makes it easy to stay consistent, <br />{" "}
            even when you forget. Set a funding amount, frequency <br /> and
            payment method and Rise will automatically fund <br /> your
            investment, on schedule.
          </p>
          <Link to="#" className="feature-link">
            <p>Start Investing Now</p>
            <ArrowRight width={15} height={15} className="arrow-right" />
          </Link>
        </div>
        <div className="feature-right">
          <Man />
        </div>
      </div>
    </div>
  );
};

export default Invest;
