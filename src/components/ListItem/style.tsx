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
export const Send = styled.div`
  padding-left: 15px;
  visibility: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:before {
    content: "";
    height: 12px;
    width: 12px;
    background-image: url(${WarningImg});
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    margin-right: 5px;
  }
`;

export const BeforeElement = styled.div`
  width: 12px;
  height: 12px;
`;
export const Adding = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  color: #81b214;
  width: 100%;
  &:before {
    content: "";
    height: 12px;
    width: 12px;
    background-image: url(${okImg});
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    margin-right: 5px;
  }
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
  &:hover ${Send} {
    visibility: visible;
  }
`;
export const Item = styled.div`
  padding-left: 5px;
  flex: 0 1 560px;
  overflow: hidden;
  height: 20px;
  word-break: break-all;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0)
  );
  white-space: nowrap;
`;
