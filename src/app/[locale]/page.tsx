import { NextPage } from "next";
import { getTranslations } from "next-intl/server";
import withLocale from "@/libs/withLocale";
import LocaleSwitcher from "@/components/Page/LocaleSwitcher";
import { Modal, Table } from "@/components/UI";
import { Columns } from "@/components/UI/Table/type";

type TableData = {
  id: string;
  name: string;
  gender: string;
  role: string;
};

const HomePage: NextPage = async () => {
  const t = await getTranslations("home");

  const dataSource: TableData[] = [
    { id: "1", name: "Jack", gender: "Male", role: "User" },
    { id: "2", name: "Julie", gender: "Female", role: "User" },
    { id: "3", name: "Kevin", gender: "Male", role: "Admin" },
  ];

  const columns: Columns<TableData> = [
    { id: "name", title: "Name", dataIndex: "name" },
    { id: "gender", title: "Gender", dataIndex: "gender" },
    { id: "role", title: "Role", dataIndex: "role" },
  ];

  return (
    <div>
      <span>{t("title")}</span>
      <LocaleSwitcher />
      <Table<TableData> hasRowSelection dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default withLocale(HomePage);
