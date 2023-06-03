import Link from "next/link";
import { socialIcons } from "@/data/footer_data";
import appConfig from "../../../app.config";

const Footer = () => {
  return (
    <>
      <footer className="page-footer w-full my-5">
        <div className="container">
          <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
            <div className="col-span-3 md:col-span-4">
              <p className="dark:text-white mb-12">
                {appConfig.description}
              </p>
              <div className="flex space-x-5">
                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <a
                      key={id}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group cursor-pointer"
                    >
                      <svg className="mr-3 icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
                        <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              <span>© {new Date().getFullYear()} PlanMeet.ai</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
