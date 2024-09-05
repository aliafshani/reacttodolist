import { createContext, useEffect, useState } from "react";

const Context = createContext();

const AppContext = ({ children }) => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
  };
  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [dark]);

  return (
    <Context.Provider value={{ dark, darkModeHandler }}>
      {children}
    </Context.Provider>
  );
};

export { AppContext, Context };
