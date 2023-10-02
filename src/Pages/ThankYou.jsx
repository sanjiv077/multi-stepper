import React from "react";
import icon from "../assets/images/icon-thank-you.png";

import "../assets/styling/thankyou.css"

const ThankYou = () => {
  return (
    <div className="box d-flex flex-column align-items-center">
      <img className="thanks-img" src={icon} alt="checkmark" />
      <h1 className="thanks-txt">
        Thank you!
      </h1>
      <p className="thanks-desc">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@sanjiv.com
      </p>
    </div>
  );
};

export default ThankYou;
