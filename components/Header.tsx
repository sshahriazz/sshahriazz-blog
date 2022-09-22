import React, { FC, FormEventHandler, useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import {
  Avatar,
  Button,
  Card,
  Dropdown,
  Link,
  Navbar,
  Radio,
  Text,
} from "@nextui-org/react";
import { VariantsSelectorWrapper } from "../primitive/VariantsSelectorWrapper";
import { NavbarVariantsProps } from "@nextui-org/react/types/navbar/navbar.styles";
import ToggleDarkMode from "./ToggleDarkMode";
import { signOut } from "next-auth/react";
import CredentialModal from "./CredentialModal";
import CredentialForm from "./CredentialForm";

export const AcmeLogo: FC = () => (
  <svg
    fill="none"
    height="36"
    viewBox="0 0 32 32"
    width="36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const Header: React.FC = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();
  type NavVariant = "static" | "sticky" | "floating" | undefined;

  const [variant, setVariant] = React.useState<NavVariant>("static");

  const variants = ["static", "floating", "sticky"];

  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  function handleAction(action: React.Key) {
    if (action === "logout") {
      signOut();
    }
  }
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const user = await fetch("/api/auth/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then((data) => data.json())
      .then((t) => console.log(t));
  };

  return (
    <>
      <CredentialModal
        visible={visible}
        closeHandler={closeHandler}
        handleSubmit={handleSubmit}
      >
        <CredentialForm
          emailValue={userInfo.email}
          onChangeEmail={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          passwordValue={userInfo.password}
          onChnagePassword={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
        />
      </CredentialModal>
      <Navbar variant={variant} isBordered>
        <Navbar.Toggle showIn="sm" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="sm">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="sm"
          variant="highlight-rounded"
        >
          <Navbar.Link>Features</Navbar.Link>
          <Navbar.Link isActive>Customers</Navbar.Link>
          <Navbar.Link>Pricing</Navbar.Link>
          <Navbar.Link>Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <ToggleDarkMode />
          {session ? (
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="secondary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => handleAction(actionKey)}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Navbar.Content>
              <Button auto onPress={() => signIn()} shadow color="gradient">
                Login
              </Button>
              <Navbar.Item>
                <Button auto flat onClick={handler}>
                  Sign Up
                </Button>
              </Navbar.Item>
            </Navbar.Content>
          )}
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
      <VariantsSelectorWrapper>
        <Card css={{ maxW: "50%" }}>
          <Card.Body css={{ pt: "$8", px: "$8" }}>
            <Radio.Group
              defaultValue="default"
              label="Select variant"
              orientation="horizontal"
              size="sm"
              value={variant}
              onChange={(e) => setVariant(e as NavVariant)}
            >
              {variants.map((variant, index) => (
                <Radio key={index} value={variant}>
                  {variant}
                </Radio>
              ))}
            </Radio.Group>
          </Card.Body>
        </Card>
      </VariantsSelectorWrapper>
    </>
  );
};

export default Header;
