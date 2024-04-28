"use client";
import AccountMain from "@/components/account/AccountMain";
import AccountSidebar from "@/components/account/AccountSidebar";
import BreadCrumb from "@/components/common/BreadCrumb";
import USPCard from "@/components/home/USPCard";
import { accountList } from "@/utils/accountList";
import React, { useState } from "react";

const page = () => {
  const [selected, setSelected] = useState(accountList[0].item);
  const handleSelect = (newSelected: string) => {
    setSelected(newSelected);
  };
  return (
    <main>
      <BreadCrumb route={["Home", "Profile"]} page="Profile" />
      <section className="px-24 py-12 flex jb gap-12">
        <AccountSidebar selected={selected} handleSelect={handleSelect} />
        <AccountMain selected={selected} />
      </section>
      <USPCard />
    </main>
  );
};

export default page;
