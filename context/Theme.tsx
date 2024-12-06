"use client";

import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NetxThemesProvider } from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NetxThemesProvider {...props}>{children}</NetxThemesProvider>;
};

export default ThemeProvider;
