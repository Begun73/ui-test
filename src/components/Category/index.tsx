import { Devider, CategoryProp, CategoryWrapper } from "./style";

type Props = {
  value: string;
};
export const Category = ({ value }: Props) => {
  return (
    <CategoryWrapper>
      <CategoryProp>{value}</CategoryProp>
      <Devider />
    </CategoryWrapper>
  );
};
