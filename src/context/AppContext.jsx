import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [step, setStep] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState({
    id: 1,
    name: "Arcade",
    pricemonthly: "9",
    priceyearly: "90",
  });
  const handlePlus = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  const handleAddonsSelection = (selectedAddonsData) => {
    setSelectedAddons(selectedAddonsData);
  };
  const handlePlanSelection = (planData) => {
    setSelectedPlan(planData);
  };

  const value = {
    step,
    setStep,
    handlePlus,
    handlePrev,
    selectedAddons,
    handleAddonsSelection,
    selectedPlan,
    setSelectedPlan,
    handlePlanSelection,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
