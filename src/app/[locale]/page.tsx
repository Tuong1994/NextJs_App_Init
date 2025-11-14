import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
import withLocale from "@/libs/withLocale";
import LocaleSwitcher from "@/components/Page/LocaleSwitcher";
import Example from "@/components/Page/Example";

const HomePage: NextPage = async () => {
  const t = await getTranslations("home");

  return (
    <div className="!p-16">
      <span>{t("title")}</span>
      <LocaleSwitcher />
      <Example />
    </div>
  );
};

export default withLocale(HomePage);
