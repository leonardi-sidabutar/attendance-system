import { createContext, useState } from "react";

// Create New Contet
const ApplicationContext = createContext();

// Create Provider
const AppContextProvider = ({ children }) => {
  // State Management
  const [collapsed, setCollapsed] = useState(false);
  const [route, setRoute] = useState("dashboard");
  const [userLoged, setUserLoged] = useState(null);
  const [selectMessage, setSelectMessage] = useState(null);
  const [selectTab, setSelectTab] = useState(0);

  // Function
  const handleCollapsedChange = (value) => {
    setCollapsed(!value);
  };
  const handleRouteChange = (value) => {
    setRoute(value);
  };
  const handleSelectMessageChange = (value) => {
    setSelectMessage(value);
  };
  const handleSelectTab = (value)=>{
    setSelectTab(value)
  }

  // Object
  const contextValue = {
    collapsed,
    route,
    userLoged,
    setUserLoged,
    selectMessage,
    selectTab,

    handleCollapsedChange,
    handleRouteChange,
    handleSelectMessageChange,
    handleSelectTab,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Create Custome Hook
export const AppContext = ApplicationContext;
export default AppContextProvider;
