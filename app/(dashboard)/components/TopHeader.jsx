import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import React from "react";

function TopHeader({sideNav, setSideNav}) {

    const sideNavFun = ()=>{
        sideNav?setSideNav(false):setSideNav(true)
    }

  return (
    <div className="flex p-5 border-b items-center justify-between">
      <button onClick={sideNavFun}>
        <AlignJustify className={`md:hidden ${sideNav? "ml-96": ""}`} />
      </button>

      {/* <svg
          id="logo-72"
          width="52"
          height="44"
          viewBox="0 0 53 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
            class="ccustom"
            fill="#EEE5E9"
          ></path>
        </svg> */}

      <h2 className="text-2xl font-extrabold">Nunu Sharing</h2>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default TopHeader;
