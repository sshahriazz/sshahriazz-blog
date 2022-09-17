import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { Button, Card, Navbar, Radio, Text, VariantProps } from '@nextui-org/react';
import { VariantsSelectorWrapper } from '../primitive/VariantsSelectorWrapper';
import { NavbarVariantsProps } from '@nextui-org/react/types/navbar/navbar.styles';
import ToggleDarkMode from './ToggleDarkMode';


export const AcmeLogo: FC = () => 
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

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();
  type NavVariant = "static" | "sticky" | "floating" | undefined

  const [variant, setVariant] = React.useState<NavVariant>("static");

  const variants = ["static", "floating", "sticky"];

  return (
    <>
    <Navbar isBordered variant={variant}>
    <Navbar.Brand>
      <AcmeLogo />
      <Text b color="inherit" hideIn="xs">
        ACME
      </Text>
    </Navbar.Brand>
    <Navbar.Content hideIn="xs">
      <Navbar.Link href="#">Features</Navbar.Link>
      <Navbar.Link isActive href="#">Customers</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Company</Navbar.Link>
    </Navbar.Content>
    <Navbar.Content>
      <ToggleDarkMode/>
      <Navbar.Link color="inherit" href="#">
        Login
      </Navbar.Link>
      <Navbar.Item>
        <Button auto flat>
          Sign Up
        </Button>
      </Navbar.Item>
    </Navbar.Content>
  </Navbar>
  <VariantsSelectorWrapper>
    <Card css={{maxW: "50%"}}>
      <Card.Body css={{pt: "$8", px: "$8"}}>
        <Radio.Group
          defaultValue="default"
          label="Select variant"
          orientation="horizontal"
          size="sm"
          value={variant}
          onChange={(e) => setVariant(e as NavVariant)}
        >
          {variants.map((variant) => (
            <Radio key={variant} value={variant}>
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
