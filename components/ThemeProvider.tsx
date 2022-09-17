// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { FC } from "react";

const lightTheme = createTheme({
  type: "light",
  theme: {},
});

const darkTheme = createTheme({
  type: "dark",
  theme: {},
});

const ThemeProvider: FC<{ children: React.ReactNode }> = (props) => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>{props.children}</NextUIProvider>
    </NextThemesProvider>
  );
};
export default ThemeProvider;
