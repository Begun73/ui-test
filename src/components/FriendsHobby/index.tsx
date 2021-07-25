import { useState } from "react";
import { Category } from "../Category";
import { Title } from "../Title";
import { observer } from "mobx-react-lite";
import { List } from "../List";
import { types } from "../../constants";

export const FriendsHobby = observer((): JSX.Element => {
  return (
    <div>
      <Category value="Интересы друга" />
      <Title value="Хобби" />
      <List type={types.FRIEND} />
    </div>
  );
});
