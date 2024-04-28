import { cn } from "@/lib/utils";
import { accountList } from "@/utils/accountList";
import React from "react";
type Props = {
  selected: string;
  handleSelect: (value: string) => void;
};
const AccountSidebar = ({ selected, handleSelect }: Props) => {
  return (
    <aside className="w-72">
      <ul className="flex flex-col gap-3">
        {accountList.map(({ item, element }, idx) => {
          return (
            <li
              onClick={() => handleSelect(item)}
              key={idx}
              className={cn(
                "cursor-pointer h-16 flex items-center px-6 border rounded-2xl text-xl font-semibold",
                selected === item && "bg-[#ffba35]"
              )}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AccountSidebar;
