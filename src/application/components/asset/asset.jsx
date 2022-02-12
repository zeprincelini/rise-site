import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIntersect } from "../../hooks/useIntersect";

import { ReactComponent as ArrowRight } from "../../../assets/svg/arrow-right.svg";
import cardOne from "../../../assets/img/card-icon-1.png";
import cardTwo from "../../../assets/img/card-icon-2.png";
import cardThree from "../../../assets/img/card-icon-3.png";
import "./asset.css";

const Asset = () => {
  const cardRef = useRef();
  const visible = useIntersect(cardRef);

  return (
    <div className="asset-container">
      <div className="asset-header">
        <p className="asset-title">Asset Classes</p>
        <p className="asset-subtitle">
          It&apos;s your money, choose where you invest it
        </p>
      </div>
      <div className="asset-card" ref={cardRef}>
        <div className="card-1">
          <div className={`card-icon ${visible ? "animate" : ""}`}>
            <img src={cardOne} alt="icon" className="card-svg" />
          </div>
          <div className="card-body">
            <div>
              <p className="card-title">Stocks</p>
              <p className="card-text">
                We help you invest and manage your <br /> money by investing in
                our portfolio of 30 <br /> high-growth stocks across the US
                market <br /> with our equity portfolio of power stocks.
                <br />
              </p>
              <div className="card-text-bottom">
                <span>Historical returns:</span> 14% per annum <br />{" "}
                <span>Risk Level:</span> Medium
              </div>
            </div>
            <div className="card-footer">
              <Link to="#" className="card-link">
                <p>Learn how Stocks work</p>
                <ArrowRight width={15} height={15} />
              </Link>
            </div>
          </div>
        </div>
        <div className="card-2">
          <div className={`card-icon ${visible ? "animate" : ""}`}>
            <img src={cardTwo} alt="icon" className="card-svg" />
          </div>
          <div className="card-body">
            <div>
              <p className="card-title">Real Estate</p>
              <p className="card-text">
                Our Real Estate plan is the sweet <br /> middle. Best for those
                who want a <br /> balance of good returns and medium <br />{" "}
                risk. This plan invests in rented <br /> buildings in the US.
                <br />
              </p>
              <div className="card-text-bottom">
                <span>Historical returns:</span> 14% per annum <br />{" "}
                <span>Risk Level:</span> Medium
              </div>
            </div>
            <div className="card-footer">
              <Link to="#" className="card-link">
                <p>Learn how Real Estate work</p>
                <ArrowRight width={15} height={15} />
              </Link>
            </div>
          </div>
        </div>
        <div className="card-3">
          <div className={`card-icon ${visible ? "animate" : ""}`}>
            <img src={cardThree} alt="icon" className="card-svg" />
          </div>
          <div className="card-body">
            <div>
              <p className="card-title">Fixed Income</p>
              <p className="card-text">
                A low-risk asset perfect for anyone who <br /> wants to protect
                their money in a <br /> secure, appreciating currency, i.e. the{" "}
                <br /> dollar. For people who want to protect <br /> their
                hard-earned money from <br />
                inflation while earning steady returns.
                <br />
              </p>
              <div className="card-text-bottom">
                <span>Historical returns:</span> 14% per annum <br />{" "}
                <span>Risk Level:</span> Medium
              </div>
            </div>
            <div className="card-footer">
              <Link to="#" className="card-link">
                <p>Learn how Fixed Income work</p>
                <ArrowRight width={15} height={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asset;
