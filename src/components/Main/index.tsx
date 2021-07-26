import { FriendsHobby } from "../FriendsHobby";
import { Modal } from "../Modal";
import { MyHobby } from "../MyHobby";
import { FormWrapper, MainWrapper } from "./style";

export const Main = (): JSX.Element => {
  return (
    <MainWrapper>
      <FormWrapper>
        <MyHobby />
        <FriendsHobby />
      </FormWrapper>
      <Modal />
    </MainWrapper>
  );
};
