import { accountList } from "@/utils/accountList";
import React from "react";
type Props = {
  selected: string;
};
const AccountMain = ({ selected }: Props) => {
  const [{ element }] = accountList.filter(({ item }) => selected === item);

  return <section>{element}</section>;
};

export default AccountMain;
