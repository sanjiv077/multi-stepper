import arcade from "../assets/images/icon-arcade.png";
import advanced from "../assets/images/icon-advanced.png";
import pro from "../assets/images/icon-pro.png";

export const data = {
  home: [
    {
      id: 1,
      step: "STEP 1",
      title: "YOUR INFO",
      linkTo: "/",
    },
    {
      id: 2,
      step: "STEP 2",
      title: "SELECT PLAN",
      linkTo: "selectplan",
    },
    {
      id: 3,
      step: "STEP 3",
      title: "ADD-ONS",
      linkTo: "addons",
    },
    {
      id: 4,
      step: "STEP 4",
      title: "SUMMARY",
      linkTo: "summary",
    },
  ],

  plan: [
    {
      id: 1,
      name: "Arcade",
      pricemonthly: "9",
      priceyearly: "90",
      img: arcade,
    },
    {
      id: 2,
      name: "Advanced",
      pricemonthly: "12",
      priceyearly: "120",
      img: advanced,
    },
    {
      id: 3,
      name: "Pro",
      pricemonthly: "15",
      priceyearly: "150",
      img: pro,
    },
  ],
  
  addons: [
    {
      name: "Online Services",
      description: "Access to multiplayer games",
      price: "+$1/mo",
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: "+$2/mo",
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
    },
  ],
};
