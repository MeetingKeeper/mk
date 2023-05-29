import Link from "next/link";
import Image from 'next/image';
import Logo from "../../../public/assets/images/logo-192x192.png";
import appConfig from "../../../app.config";

const Header = () => {
  return (
    <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
      <div className="flex items-center px-6 py-6 xl:px-24 ">
        <Link className="shrink-0" href="/" legacyBehavior>
          <a className="flex flex-row justify-center items-center">
            <div className="dark:block">
              <Image
                src={Logo}
                height={38}
                width={38}
                alt={appConfig.name}
              />
            </div>
            <span className="text-white">
              {appConfig.name}
            </span>
          </a>

        </Link>
      </div>
    </header>
  )
}

export default Header;
