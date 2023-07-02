import { useTheme } from "@pm/ui";
import { Link } from "react-router-dom";
import LogoImage from "../../../../assets/images/logo-face.png";

const Header = () => {
  const { theme: themeConfig, toggleSidebar } = useTheme();

  return (
    <header
      className={
        themeConfig.semiDark && themeConfig.menu === 'horizontal' ? 'dark' : ''
      }
    >
      <div className="shadow-sm" >
        <div className="relative flex w-full items-center justify-between bg-white px-5 py-2.5 dark:bg-black"  style={{ minHeight: '56px' }}>
          <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">
            <Link to="/" className="main-logo flex shrink-0 items-center">
              <img
                className="inline w-8 ltr:-ml-1 rtl:-mr-1"
                src={LogoImage}
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7L4 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  opacity="0.5"
                  d="M20 12L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 17L4 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div
            className="flex flex-1 flex-grow"
            style={{ background: 'red' }}
          />
          <div className="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2">
            <div className="dropdown flex shrink-0">

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
