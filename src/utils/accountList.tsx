import Logout from "@/components/account/Logout";
import MyOrders from "@/components/account/MyOrders";
import PaymentMethod from "@/components/account/PaymentMethod";
import ManageAddressForm from "@/components/forms/ManageAddressForm";
import PasswordManagerForm from "@/components/forms/PasswordManagerForm";
import PersonalInfoForm from "@/components/forms/PersonalInfoForm";
import { ReactNode } from "react";

export type accountListItem = {
  item: string;
  element: ReactNode;
};
export const accountList: accountListItem[] = [
  {
    item: "Personal Information",
    element: <PersonalInfoForm />,
  },
  {
    item: "My Orders",
    element: <MyOrders />,
  },
  {
    item: "Manage Address",
    element: <ManageAddressForm />,
  },
  {
    item: "Payment Method",
    element: <PaymentMethod />,
  },
  {
    item: "Password Manager",
    element: <PasswordManagerForm />,
  },
  {
    item: "Logout",
    element: <Logout />,
  },
];
