import React, { FC, ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

import { Box } from "../primitive/Box";
import { Container } from "@nextui-org/react";

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    <Header />
    <Container>{children}</Container>
  </Box>
);

export default Layout;
