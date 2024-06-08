import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
      <header className="sticky py-4">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 border-b-2">
          <a className="block text-teal-600 dark:text-teal-300" href="/">
            <span className="sr-only">Home</span>
            <svg
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
            </svg>
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/upload"
                  >
                    Upload
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/aboutUs"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/contactUs"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
                <SignedIn>
                <UserButton className="h-[50px] w-auto text-2xl " afterSignOutUrl="/"/>
                </SignedIn>
                <SignedOut >

                <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-black transition hover:bg-blue-500 dark:hover:bg-blue-500"
                  href="/upload"
                >
                  Login
                </a>

                <a
                  className="hidden rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-black transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                  href="/sign-up"
                >
                  Register
                </a>
              </div>
                </SignedOut>


              

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
