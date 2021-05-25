import React, {useContext, useState} from 'react';

const AppContext = React.createContext ();

const AppProvider = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState (true);
  const [isSidebarOpen, setIsSidebarOpen] = useState (true);

  const openSidebar = () => {
    setIsSidebarOpen (true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen (false);
  };

  const openMenu = () => {
    setIsMenuOpen (true);
  };

  const closeMenu = () => {
    setIsMenuOpen (false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isMenuOpen,
        closeMenu,
        openMenu,
        closeSidebar,
        openSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext (AppContext);
};

export {AppContext, AppProvider};
