import { observer } from "mobx-react-lite";
import { useState } from "react";
import { types } from "../../constants";
import { useStore } from "../../store";
import {
  Add,
  Added,
  BeforeElement,
  Item,
  ItemWrapper,
  Remove,
  Send,
} from "./style";

type Props = {
  typeHobby: string;
  isAdded: boolean;
  hobby: string;
};
type BeforeProp = {
  isHidden: boolean;
};
export const ListItem = observer(({ typeHobby, isAdded, hobby }: Props) => {
  const store = useStore();
  const Before = (): JSX.Element => {
    if (!isAdded && typeHobby === types.FRIEND)
      return <Add onClick={() => store.addHobby(hobby)} />;
    if (typeHobby === types.MY) return <Remove />;
    if (isAdded && typeHobby === types.FRIEND) return <Added />;
    return <BeforeElement />;
  };

  return (
    <ItemWrapper>
      <Before />
      <Item>{hobby}</Item>
      <Send />
    </ItemWrapper>
  );
});
