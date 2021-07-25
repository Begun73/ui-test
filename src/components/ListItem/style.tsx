import styled from "styled-components";
import AddImg from "../../img/add.gif";
import RemoveImg from "../../img/close.png";
import okImg from "../../img/ok.png";
import WarningImg from "../../img/warn.png";
type isHiddenProp = {
  isHidden: boolean;
};

export const Add = styled.div`
  width: 12px;
  height: 12px;
  background-image: url(${AddImg});
  visibility: hidden;
  background-repeat: no-repeat;
  cursor: pointer;
`;
export const Remove = styled.div`
  width: 12px;
  height: 12px;
  background-image: url(${RemoveImg});
  visibility: hidden;
  background-repeat: no-repeat;
  cursor: pointer;
`;
export const Added = styled.div`
  width: 12px;
  height: 12px;
  background-image: url(${okImg});
  visibility: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
export const Send = styled.div``;

export const BeforeElement = styled.div`
  width: 12px;
  height: 12px;
`;
export const ItemWrapper = styled.div`
  margin: 6px 0;
  position: relative;
  display: flex;
  align-items: center;
  &:hover ${Add} {
    visibility: visible;
  }
  &:hover ${Remove} {
    visibility: visible;
  }
  &:hover ${Added} {
    visibility: visible;
  }
`;
export const Item = styled.div`
  padding-left: 5px;
`;
