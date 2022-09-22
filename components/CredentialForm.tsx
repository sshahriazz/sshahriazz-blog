import { Checkbox, FormElement, Input, Row, Text } from "@nextui-org/react";
import React, { FC, useState } from "react";
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

  const validatePassword = (password: string) => {
    const uppercaseRegExp: RegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp: RegExp = /(?=.*?[a-z])/;
    const digitsRegExp: RegExp = /(?=.*?[0-9])/;
    const specialCharRegExp: RegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp: RegExp = /.{8,}/;

    const trimedPassword = password.trim();

    const passwordLength = trimedPassword.length;
    const isUpperCase = uppercaseRegExp.test(trimedPassword);
    const islowerCase = lowercaseRegExp.test(trimedPassword);
    const isDigit = digitsRegExp.test(trimedPassword);
    const isSpecialChar = specialCharRegExp.test(trimedPassword);
    const isminLength = minLengthRegExp.test(trimedPassword);

    if (passwordLength === 0) {
      return "Password is empty";
    } else if (!isUpperCase) {
      return "At least one Uppercase";
    } else if (!islowerCase) {
      return "At least one Lowercase";
    } else if (!isDigit) {
      return "At least one digit";
    } else if (!isSpecialChar) {
      return "At least one Special Characters";
    } else if (!isminLength) {
      return "At least minumum 8 characters";
    } else {
      return "";
    }
  };
  const validateEmail = (email: string) => {
    return email.trim().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };
  type colorType =
    | "success"
    | "error"
    | "primary"
    | "secondary"
    | "warning"
    | "default"
    | undefined;

  const emailHelper = React.useMemo((): { text: string; color: colorType } => {
    if (!emailValue) {
      return {
        text: "",
        color: undefined,
      };
    }
    validatePassword(passwordValue);
    const isValid = validateEmail(emailValue);
    console.log(passwordValue);

    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [emailValue, passwordValue]);

  const passwordHelper = React.useMemo((): {
    text: string;
    color: colorType;
  } => {
    if (!passwordValue) {
      return { text: "", color: undefined };
    }
    const msg = validatePassword(passwordValue);
    return {
      text: msg,
      color: msg === "" ? "success" : "error",
    };
  }, [passwordValue]);

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
        status={emailHelper.color}
        helperColor={emailHelper.color}
        helperText={emailHelper.text}
        color={emailHelper.color}
        label="Email"
        type="email"
        clearable
        required
        value={emailValue}
        onChange={onChangeEmail}
        bordered
        fullWidth
        size="lg"
        placeholder="Email"
        contentLeft={<Mail fill="currentColor" />}
      />
      <Input.Password
        status={passwordHelper.color}
        helperColor={passwordHelper.color}
        helperText={passwordHelper.text}
        color={passwordHelper.color}
        label="Password"
        required
        clearable
        value={passwordValue}
        onChange={onChnagePassword}
        bordered
        fullWidth
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
