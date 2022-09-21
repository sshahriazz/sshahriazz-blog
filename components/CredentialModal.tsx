import {
  Button,
  Checkbox,
  FormElement,
  Input,
  Modal,
  Row,
  Text,
} from "@nextui-org/react";
import React, { FC, FormEventHandler } from "react";

const CredentialModal: FC<{
  children: React.ReactNode;
  visible: boolean;
  closeHandler: (() => void) & React.ReactEventHandler<unknown>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}> = (props) => {
  const { visible, closeHandler, children, handleSubmit } = props;
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Please Enter details to
          <Text b size={18}>
            {" "}
            Signup
          </Text>
        </Text>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto type="submit">
            Sign up
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CredentialModal;
