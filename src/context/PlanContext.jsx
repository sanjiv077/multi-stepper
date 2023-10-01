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
