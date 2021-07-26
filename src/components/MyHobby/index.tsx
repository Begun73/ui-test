// @flow
import { observer } from "mobx-react-lite";
import * as React from "react";
import { errors, types } from "../../constants";
import { useStore } from "../../store";
import { Category } from "../Category";
import { List } from "../List";
import { Title } from "../Title";
import { ErrorSpan, Hobby } from "./style";
type Props = {};
export const MyHobby = observer((props: Props) => {
  const store = useStore();
  const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (store.error) {
      store.setError("");
    }
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      if (target.value.length === 0) {
        store.setError(errors.EMPTY);
      } else if (
        store.myHobby.some(
          (x) => x.toLowerCase() === target.value.toLowerCase()
        )
      ) {
        store.setError(errors.SOME);
      } else {
        store.addHobby(target.value);
        target.value = "";
      }
    }
  };
  return (
    <div>
      <Category value="О себе" />
      <Title value="Хобби" />
      <Hobby type="text" onKeyDown={onkeydown} placeholder="Введите текст" />
      {store.error && <ErrorSpan>{store.error}</ErrorSpan>}
      <List type={types.MY} />
    </div>
  );
});
