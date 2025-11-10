import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
import withLocale from "@/libs/withLocale";
import LocaleSwitcher from "@/components/Page/LocaleSwitcher";
import { Pagination } from "@/components/UI";

const HomePage: NextPage = async () => {
  const t = await getTranslations("home");

  return <div>
    <span>{t("title")}</span>
    <LocaleSwitcher />
    <Pagination showContent />
  </div>;
};

export default withLocale(HomePage);
