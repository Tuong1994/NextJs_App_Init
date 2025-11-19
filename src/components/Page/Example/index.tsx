"use client";

import { TreeSelect, DatePicker } from "@/components/Control";

const Example = () => {
  const options = [
    { label: "This is option 1", value: 1 },
    { label: "This is option 2", value: 2 },
  ];

  return (
    <>
      <DatePicker placement="right" rootStyle={{ width: "100px" }} />
      <TreeSelect placement="right" rootStyle={{ width: "100px" }} options={options} />
    </>
  );
};

export default Example;
