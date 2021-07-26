// @flow
import { observer } from "mobx-react-lite";
import * as React from "react";
import { useMemo, useState } from "react";
import { hobbyList, types } from "../../constants";
import { useStore } from "../../store";
import { ListItem } from "../ListItem";
import { Collapse, ListWrapper, More } from "./style";
type Props = {
  type: string;
};
export const List = observer(({ type }: Props): JSX.Element => {
  const [isOpen, toggleOpen] = useState<boolean>(false);
  const store = useStore();
  let list = useMemo(
    () => (type === types.MY ? [...store.myHobby] : [...hobbyList]),
    [store.myHobby.length, type]
  );
  let prevlist = useMemo(
    () => (list.length > 2 ? list.splice(0, 2) : list.splice(0, list.length)),
    [list]
  );

  return (
    <React.Fragment>
      <ListWrapper>
        {prevlist.map((x: string, key: number) => (
          <ListItem
            typeHobby={type}
            isAdded={store.myHobby.some(
              (k: string) => k.toLowerCase() === x.toLowerCase()
            )}
            key={key + "_" + type}
            index={key}
            hobby={x}
          />
        ))}
        {list.length > 0 && (
          <Collapse isOpen={isOpen}>
            {list.map((x: string, key: number) => (
              <ListItem
                typeHobby={type}
                isAdded={store.myHobby.some(
                  (k: string) => k.toLowerCase() === x.toLowerCase()
                )}
                key={key + "_" + type + "_collapse"}
                index={key + 2}
                hobby={x}
              />
            ))}
          </Collapse>
        )}
      </ListWrapper>
      {list.length > 0 && (
        <More onClick={() => toggleOpen((prev) => !prev)}>
          {!isOpen ? "еще " + list.length + " интереса" : "свернуть"}
        </More>
      )}
    </React.Fragment>
  );
});
