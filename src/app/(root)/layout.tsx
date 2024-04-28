import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import PromotionBar from "@/components/common/PromotionBar";
import { ThemeProvider } from "@/providers/ThemeProivider";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="min-h-screen flex flex-col flex-1 antialiased bg-background">
        <PromotionBar />
        <Navbar />
        {children}
        <Footer/>
      </main>
    </ThemeProvider>
  );
};

export default layout;
