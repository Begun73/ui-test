import styled from "styled-components";
import closeImg from "../../img/close.png";

export const ModalLayout = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 588px;
  height: 328px;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  position: relative;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  label {
    padding: 40px 0 20px 0;
    font-weight: 600;
  }
  textarea {
    border: 1px solid #334257;
    outline: none;
    width: 99%;
  }
`;
export const ModalButtons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Close = styled.div`
  width: 12px;
  height: 12px;
  background-image: url(${closeImg});
  background-repeat: no-repeat;
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-left: 20px;
  border: 1px solid #3c8dad;
  background-color: #fff;
  color: #3c8dad;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #3c8dad;
    color: #fff;
  }
`;
