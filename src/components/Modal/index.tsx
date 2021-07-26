// @flow
import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStore } from "../../store";
import {
  Button,
  Close,
  ModalBody,
  ModalButtons,
  ModalContent,
  ModalLayout,
  ModalWrapper,
} from "./style";

export const Modal = observer((): JSX.Element => {
  const store = useStore();
  if (store.currentHobby) {
    return (
      <ModalLayout>
        <ModalWrapper>
          <ModalContent>
            <ModalBody>
              <label>Название:</label>
              <span>{store.currentHobby}</span>
              <label>Комментарий:</label>
              <textarea rows={4} />
            </ModalBody>
            <ModalButtons>
              <Button onClick={() => store.setModal("")}>Отправить</Button>
              <Button onClick={() => store.setModal("")}>Отменить</Button>
            </ModalButtons>
          </ModalContent>
          <Close onClick={() => store.setModal("")} />
        </ModalWrapper>
      </ModalLayout>
    );
  } else {
    return <></>;
  }
});
