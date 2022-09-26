import { Container } from "@mantine/core";
import { FooterCentered } from "components/footer";
import { TopNav } from "components";
import React, { FC, HTMLAttributes } from "react";

export const Layout: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <>
      <TopNav />
      <Container>{children}</Container>
      <FooterCentered
        links={[
          {
            link: "#",
            label: "Contact",
          },
          {
            link: "#",
            label: "Privacy",
          },
          {
            link: "#",
            label: "Blog",
          },
          {
            link: "#",
            label: "Store",
          },
          {
            link: "#",
            label: "Careers",
          },
        ]}
      />
    </>
  );
};

export default Layout;
