import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
import withLocale from "@/libs/withLocale";
import LocaleSwitcher from "@/components/Page/LocaleSwitcher";
import { ImageUpload } from "@/components/Control/Upload";

const { SingleImageUpload } = ImageUpload;

const HomePage: NextPage = async () => {
  const t = await getTranslations("home");

  return (
    <div className="!p-16">
      <span>{t("title")}</span>
      <LocaleSwitcher />
      <SingleImageUpload />
    </div>
  );
};

export default withLocale(HomePage);
