import React from "react";
import Header from "../components/Header";
import SideNav from "./components/Sidenav";
import TopHeader from "./components/TopHeader";

function Layout({ children }) {
  return (
    <div>
      <div className="h-screen w-96 flex-col fixed inset-y-0 z-50">
        <SideNav />
      </div>
      <div className="ml-96">
        <TopHeader />
        {children}
      </div>
      {/* <Header /> */}
    </div>
  );
}

export default Layout;
