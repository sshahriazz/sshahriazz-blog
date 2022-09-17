import React, { FC, ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

import { Box } from "../primitive/Box";

export const Layout: FC<{children: React.ReactNode}> = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
  </Box>
);


export default Layout;
