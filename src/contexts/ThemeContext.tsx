import React, { createContext, useState } from "react";
import { Pallet, Light, Dark } from "../theme/colors/colors";

type ThemeContextType = {
  pallet: Pallet;
  togglePalette: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  pallet: Light,
  togglePalette: () => {},
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [pallet, setPallet] = useState(Light);
  const togglePalette = () => {
    setPallet(pallet === Light ? Dark : Light);
  };

  return (
    <ThemeContext.Provider value={{ pallet: pallet, togglePalette }}>
      {children}
    </ThemeContext.Provider>
  );
};
