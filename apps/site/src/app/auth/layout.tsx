"use client";
import Image from "next/image";
import appConfig from "../../../app.config";
import useLogin from "./useLogin";


export default function Layout({ children }) {
  const { onGoogleLogin } = useLogin();
  return (
    <div className="flex min-h-screen dark:text-white-dark main-section relative font-nunito text-sm font-normal antialiased" >
      <div className="hidden min-h-screen w-1/2 flex-col  items-center justify-center gradient-circle p-4 text-white dark:text-black lg:flex">
        <div className="mx-auto mb-5 w-full">
          <Image
            width={370}
            height={370}
            src="/assets/images/logo-face.png"
            alt={appConfig.name}
            className="mx-auto lg:max-w-[370px] xl:max-w-[500px]"
          />
        </div>
        <h3 className="mb-4 text-center text-3xl font-bold text-white">Join the community of expert meeting organizer</h3>
        <p className="text-white">{appConfig.description}</p>
      </div>
      <div className="relative flex w-full items-center justify-center lg:w-1/2">
        <div className="max-w-[480px] w-full p-5 md:p-10">
          <ul className="mb-5 mt-3 flex flex-col justify-center gap-1 sm:gap-5">
            <li className="flex w-full">
              <button
                type="button"
                onClick={onGoogleLogin}
                className="btn flex w-full gap-1 bg-white-dark/30 text-black shadow-none hover:bg-white dark:border-[#253b5c] dark:bg-transparent dark:text-white dark:hover:bg-[#1b2e4b] sm:gap-2 "
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 256 193" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <g>
                    <path
                      d="M58.1818182,192.049515 L58.1818182,93.1404244 L27.5066233,65.0770089 L0,49.5040608 L0,174.59497 C0,184.253152 7.82545455,192.049515 17.4545455,192.049515 L58.1818182,192.049515 Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M197.818182,192.049515 L238.545455,192.049515 C248.203636,192.049515 256,184.224061 256,174.59497 L256,49.5040608 L224.844415,67.3422767 L197.818182,93.1404244 L197.818182,192.049515 Z"
                      fill="#34A853"
                    ></path>
                    <polygon
                      fill="#EA4335"
                      points="58.1818182 93.1404244 54.0077618 54.4932827 58.1818182 17.5040608 128 69.8676972 197.818182 17.5040608 202.487488 52.4960089 197.818182 93.1404244 128 145.504061"
                    ></polygon>
                    <path
                      d="M197.818182,17.5040608 L197.818182,93.1404244 L256,49.5040608 L256,26.2313335 C256,4.64587897 231.36,-7.65957557 214.109091,5.28587897 L197.818182,17.5040608 Z"
                      fill="#FBBC04"
                    ></path>
                    <path
                      d="M0,49.5040608 L26.7588051,69.5731646 L58.1818182,93.1404244 L58.1818182,17.5040608 L41.8909091,5.28587897 C24.6109091,-7.65957557 0,4.64587897 0,26.2313335 L0,49.5040608 Z"
                      fill="#C5221F"
                    ></path>
                  </g>
                </svg>
                Google
              </button>
            </li>
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
}
