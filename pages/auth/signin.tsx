import { Button, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import CredentialForm from "../../components/CredentialForm";
import { Box } from "../../primitive/Box";

const SignIn: NextPage<any> = (props) => {
  const { providers } = props;

  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const user = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if (!(user?.status === 401)) {
      router.push("/");
    } else {
      // console.log(user.error);
    }
  };
  const handleSingIn = async (id: string) => {
    const user = await signIn(id, { callbackUrl: "http://localhost:3000/" });
  };

  return (
    <Box
      css={{
        "@lg": {
          width: "500px",
          mx: "auto",
        },
      }}
    >
      {providers &&
        Object.values(providers).map((provider: any) => (
          <Box key={provider.id}>
            {provider.id === "credentials" && (
              <form onSubmit={handleSubmit}>
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
                <Button css={{ mt: "$4" }} type="submit" value="Submit">
                  Submit
                </Button>
              </form>
            )}
            {provider.id !== "email" && provider.id !== "credentials" && (
              <Grid.Container gap={2} justify="center" id="grid">
                <Grid>
                  <Button
                    onClick={() => handleSingIn(provider.id)}
                    color={provider.id === "github" ? "primary" : "warning"}
                  >
                    {provider.name}
                  </Button>
                </Grid>
              </Grid.Container>
            )}
          </Box>
        ))}
    </Box>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const providers = await fetch("api/auth/providers");
  const providersJson = providers.json();

  return { props: { providers: providersJson } };
};
export default SignIn;
