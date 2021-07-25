import { FriendsHobby } from "../FriendsHobby";
import { MyHobby } from "../MyHobby";
import { FormWrapper, MainWrapper } from "./style";

export const Main = (): JSX.Element => {
  return (
    <MainWrapper>
      <FormWrapper>
        <MyHobby />
        <FriendsHobby />
      </FormWrapper>
    </MainWrapper>
  );
};
