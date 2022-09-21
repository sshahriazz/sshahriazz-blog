import { Checkbox, FormElement, Input, Row, Text } from "@nextui-org/react";
import React, { FC } from "react";
import { Box } from "../primitive/Box";
import Mail from "./icons/Mail";
import Password from "./icons/Password";

export interface CredentialFormProps {
  emailValue: string;
  onChangeEmail: (e: React.ChangeEvent<FormElement>) => void;
  passwordValue: string;
  onChnagePassword: (e: React.ChangeEvent<FormElement>) => void;
}

const CredentialForm: FC<CredentialFormProps> = (props) => {
  const { emailValue, onChangeEmail, passwordValue, onChnagePassword } = props;

  return (
    <Box
      css={{
        mt: "$10",
        d: "flex",
        fd: "column",
        gap: "$8",
      }}
    >
      <Input
        label="Email"
        type="email"
        clearable
        value={emailValue}
        onChange={onChangeEmail}
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Email"
        contentLeft={<Mail fill="currentColor" />}
      />
      <Input.Password
        label="Password"
        clearable
        value={passwordValue}
        onChange={onChnagePassword}
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Password"
        contentLeft={<Password fill="currentColor" />}
      />
      <Row justify="space-between">
        <Checkbox>
          <Text size={14}>Remember me</Text>
        </Checkbox>
        <Text size={14}>Forgot password?</Text>
      </Row>
    </Box>
  );
};

export default React.memo(CredentialForm);
