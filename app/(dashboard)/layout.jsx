"use client"
import React, { useState } from "react";
import Header from "../components/Header";
import SideNav from "./components/Sidenav";
import TopHeader from "./components/TopHeader";

function Layout({ children }) {
  
  const [sideNav , setSideNav] = useState(false)

  return (
    <div>
      <div className={`h-screen w-96 flex-col fixed inset-y-0 z-50 md:flex ${sideNav? "block" : "hidden"}`}>
        <SideNav />
      </div>
      <div className="md:ml-96">
        <TopHeader setSideNav={setSideNav} sideNav={sideNav}/>
        {children}
      </div>
      {/* <Header /> */}
    </div>
  );
}

export default Layout;
