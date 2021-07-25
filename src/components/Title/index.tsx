import { Line, TitleText, TitleWrapper } from "./style";

type Props = {
  value: string;
};
export const Title = ({ value }: Props) => {
  return (
    <TitleWrapper>
      <TitleText>{value}</TitleText>
      <Line />
    </TitleWrapper>
  );
};
