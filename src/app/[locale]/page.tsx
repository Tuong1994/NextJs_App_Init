import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
import withLocale from "@/libs/withLocale";
import LocaleSwitcher from "@/components/Page/LocaleSwitcher";

const HomePage: NextPage = async () => {
  const t = await getTranslations("home");

  return <div>
    <span>{t("title")}</span>
    <LocaleSwitcher />
  </div>;
};

export default withLocale(HomePage);
