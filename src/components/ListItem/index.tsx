import { observer } from "mobx-react-lite";
import { useState } from "react";
import { types } from "../../constants";
import { useStore } from "../../store";
import {
  Add,
  Added,
  Adding,
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
  index: number;
};
export const ListItem = observer(
  ({ typeHobby, isAdded, hobby, index }: Props): JSX.Element => {
    const store = useStore();
    const [adding, setAdding] = useState<boolean>(false);
    const Before = (): JSX.Element => {
      if (!isAdded && typeHobby === types.FRIEND)
        return (
          <Add
            onClick={() => {
              store.addHobby(hobby);
              toggleMessage();
            }}
          />
        );
      if (typeHobby === types.MY)
        return <Remove onClick={() => store.deleteHobby(index)} />;
      if (isAdded && typeHobby === types.FRIEND) return <Added />;
      return <BeforeElement />;
    };
    const toggleMessage = () => {
      setAdding(true);
      setTimeout(() => setAdding(false), 1500);
    };
    return (
      <ItemWrapper>
        <Before />
        <Item>{hobby}</Item>
        {typeHobby === types.FRIEND && (
          <Send onClick={() => store.setModal(hobby)}>пожаловаться</Send>
        )}
        {adding && <Adding>Добавлено в ваши увлечения</Adding>}
      </ItemWrapper>
    );
  }
);
