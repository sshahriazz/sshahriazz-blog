import { useMantineColorScheme } from "@mantine/core";
import React from "react";
import LogoDesktop from "./LightLogoDesktop";
import LogoDesktopDark from "./DarkLogoDesktop";
import { NextLink } from "@mantine/next";

export const ComposedLogo = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <NextLink href="/">
      {colorScheme === "light" ? (
        <LogoDesktopDark size={28} />
      ) : (
        <LogoDesktop size={28} />
      )}
    </NextLink>
  );
};

export default ComposedLogo;
