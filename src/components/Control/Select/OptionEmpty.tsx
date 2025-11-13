import { FC, ReactNode } from "react";
import { useTranslations } from "next-intl";

interface OptionEmptyProps {
  emptyContent?: ReactNode | ReactNode[];
}

const OptionEmpty: FC<OptionEmptyProps> = ({ emptyContent }) => {
  const t = useTranslations("common.form");

  return <div className="list-empty">{emptyContent ?? t("others.emptyOptions")}</div>;
};

export default OptionEmpty;
