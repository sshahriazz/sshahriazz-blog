import React, { FC, ReactNode, useState } from "react";
import Header from "./Header";
import NProgress from "nprogress";
import Router from "next/router";
import { Box } from "../primitive/Box";
import { Container, Progress } from "@nextui-org/react";

type Props = {
  children: ReactNode;
};

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPageLoading, setIsPageLoading] = useState<boolean>(false);

  return (
    <Box
      css={{
        maxW: "100%",
      }}
    >
      <Header />
      <Container>{children}</Container>
    </Box>
  );
};

export default Layout;
