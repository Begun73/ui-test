import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
type CollapseProps = {
  isOpen: boolean;
};
type MoreProps = {
  onClick: (e: Event) => void;
};

export const ListWrapper = styled.div``;

export const Collapse = styled.div<CollapseProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;
export const More = styled.a<MoreProps>`
  color: #ff3f00;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 17px;
  &:hover {
    text-decoration: none;
  }
`;
