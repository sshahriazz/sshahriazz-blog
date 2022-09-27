import { Container } from "@mantine/core";
import CenteredFooter from "components/footer/CenteredFooter";
import TopNav from "components/header/TopNav";
import React, { FC, HTMLAttributes } from "react";

export const MainLayout: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <>
      <Container size="lg">
        <TopNav />
        {children}
        <CenteredFooter
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
      </Container>
    </>
  );
};

export default MainLayout;
