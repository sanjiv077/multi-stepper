import React, { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export const usePlanContext = () => {
  return useContext(PlanContext);
};

export const PlanProvider = ({ children }) => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState(localStorage.getItem("billingPeriod") || "monthly");
  const [selectedAddons, setSelectedAddons] = useState({
    onlineServices: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const [plans , setPlans] = useState([])

  const handlePlans = (item) => {
    setPlans(item)
  }

  const calculateTotalPlansPrice = () => {
    return plans.reduce((curr , prev) => curr.price + prev.price )
  }

  // const totalAddonsPrice = selectedAddons?.reduce((total, addon) => {
  //   const priceNumeric = parseFloat(addon.price.match(/\d+(\.\d+)?/)[0]);
  //   return total + priceNumeric;
  // }, 0);

  return (
    <PlanContext.Provider
      value={{
        selectedBillingPeriod,
        setSelectedBillingPeriod,
        selectedAddons,
        setSelectedAddons,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};
