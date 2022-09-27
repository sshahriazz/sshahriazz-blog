import { useMantineColorScheme } from "@mantine/core";
import React from "react";
import LogoDesktop from "./LightLogoDesktop";
import LogoDesktopDark from "./DarkLogoDesktop";

export const ComposedLogo = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      {" "}
      {colorScheme === "light" ? (
        <LogoDesktopDark size={28} />
      ) : (
        <LogoDesktop size={28} />
      )}{" "}
    </>
  );
};

export default ComposedLogo;
