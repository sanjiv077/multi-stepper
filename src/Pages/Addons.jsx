import { useState, useEffect } from "react";
import { Col , Card , Button} from "react-bootstrap";

import "../assets/styling/addons.css";

const addonsData = [
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
];

const Addons = ({ onPrev, onNext, handleAddonsSelection }) => {
  const [checkboxes, setCheckboxes] = useState({
    onlineServices:
      localStorage.getItem("onlineServices") === "true" ? true : false,
    largerStorage:
      localStorage.getItem("largerStorage") === "true" ? true : false,
    customizableProfile:
      localStorage.getItem("customizableProfile") === "true" ? true : false,
  });
  console.log({checkboxes});
  useEffect(() => {
    const savedCheckboxes = Object.keys(checkboxes);
    savedCheckboxes.forEach((checkbox) => {
      const savedValue = localStorage.getItem(checkbox);
      if (savedValue !== null) {
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          [checkbox]: savedValue === "true",
        }));
      }
    });
  }, []);

  const handleCheckboxChange = (checkboxName) => {
    const updatedCheckboxes = {
      ...checkboxes,
      [checkboxName]: !checkboxes[checkboxName],
    };
    setCheckboxes(updatedCheckboxes);
    localStorage.setItem(checkboxName, updatedCheckboxes[checkboxName]);
  };
  
  const handleNextClick = () => {
    const selectedAddonsData = addonsData.filter(
      (addon) => checkboxes[addon.name.toLowerCase()]
    );
    handleAddonsSelection(selectedAddonsData);
    onNext(selectedAddonsData);
  };

  return (
    <Col className="side-bar md-7  mt-5">
      <h1 className="title">Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
    {console.log({addonsData})}
      <div className="cards mt-5">
        {addonsData.map((addon, index) => (
          <Card
            key={index}
            className={`mt-4 ${
              checkboxes[addon.name.toLowerCase()]
                ? "card-selected"
                : "card-unselected"
            }`}
          >
            <div className="d-flex">
              <div className="p-2">
                <input
                  type="checkbox"
                  className="check mt-3 mx-2"
                  checked={checkboxes[addon.name.toLowerCase()]}
                  onChange={() =>
                    handleCheckboxChange(addon.name.toLowerCase())
                  }
                />
              </div>
              <div className="p-2">
                <div className="title">{addon.name}</div>
                <div className="body">{addon.description}</div>
              </div>
              <div className=" p-2 ms-auto mt-2">
                <div className="body-price">{addon.price}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="buttons justify-content-between d-flex mt-5">
        <div className="nextpage mt-4">
          <button className="btn-prev-step" onClick={onPrev}>
            Go Back
          </button>
        </div>
        <div className="nextpage mt-4">
          <Button
            className="btn-next-step"
            onClick={() => {
              onNext();
              handleNextClick();
            }}
          >
            Next Step
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default Addons;
