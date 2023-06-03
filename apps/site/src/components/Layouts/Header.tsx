"use client"

import Link from "next/link"
import Dropdown from "../Dropdown"
import { useTheme } from "@/contexts/theme"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"

const Header = () => {
  const { theme: themeConfig, toggleSidebar } = useTheme();
  const { data: session, status } = useSession();
  const onLogout = async () => {
    await signOut({ callbackUrl: "/" });
  }

  if (status === "loading") return null;

  return (
    <header className={themeConfig.semiDark && themeConfig.menu === "horizontal" ? "dark" : ""}>
      <div className="shadow-sm">
        <div className="relative flex w-full items-center justify-between bg-white px-5 py-2.5 dark:bg-black">
          <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <Image
                className="inline w-8 ltr:-ml-1 rtl:-mr-1"
                src="/assets/images/logo-face.svg"
                alt="logo"
                width={15}
                height={15}
              />
              <span className="align-middle text-[1.2rem]  font-semibold  transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">
                PlantMeet.ai
              </span>
            </Link>
            <button
              type="button"
              className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
              onClick={() => toggleSidebar()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="flex flex-grow flex-1" style={{ background: 'red' }} />
          <div className="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2">
            <div className="dropdown flex shrink-0">
              <Dropdown
                offset={[0, 8]}
                placement="bottom-end"
                btnClassName="relative group block"
                button={
                  <img
                    className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                    src={session?.user?.image!}
                    alt="userProfile"
                  />
                }
              >
                <ul className="w-[320px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                  <li>
                    <div className="flex items-center px-4 py-4">
                      <img
                        className="h-10 w-10 rounded-md object-cover"
                        src={session?.user?.image!}
                        alt="userProfile"
                        width={10}
                        height={10}
                      />
                      <div className="ltr:pl-4 rtl:pr-4">
                        <h4 className="text-base">{session?.user?.name!}</h4>
                        <button
                          type="button"
                          className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white"
                        >
                          {session?.user?.email!}
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="/users/profile" className="dark:hover:text-white">
                      <svg
                        className="ltr:mr-2 rtl:ml-2"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
                        <path
                          opacity="0.5"
                          d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Profile
                    </Link>
                  </li>
                  <li className="border-t border-white-light dark:border-white-light/10">
                    <button className="!py-3 text-danger" onClick={onLogout}>
                      <svg
                        className="rotate-90 ltr:mr-2 rtl:ml-2"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Sign Out
                    </button>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
