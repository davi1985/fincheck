import { iconsMap } from "./icons-map";

interface BankAccountTypeIconProps {
  type: keyof typeof iconsMap;
}

export const BankAccountTypeIcon = ({ type }: BankAccountTypeIconProps) => {
  const Icon = iconsMap[type];

  return <Icon />;
};
