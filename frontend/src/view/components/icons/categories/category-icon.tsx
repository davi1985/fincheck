import { iconsMap } from "./icons-map";

interface CategoryIconProps {
  type: "income" | "expense";
  category?: string;
}

export const CategoryIcon = ({ type, category }: CategoryIconProps) => {
  const Icon =
    iconsMap[type][
      (category as keyof (typeof iconsMap.expense | typeof iconsMap.income)) ??
        "default"
    ] ?? iconsMap[type].default;

  return <Icon />;
};
