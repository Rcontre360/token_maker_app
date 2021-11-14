import React from "react";
import Image from 'next/image'
import LogoTransparent from '../../public/logoTransparent.png'

interface Props {}

const Layout: React.FunctionComponent<Props> = ({children}) => {
  return (
    <>
      <nav className="absolute top-0 z-10 flex items-center justify-between flex-wrap bg-transparent">
        <div className="flex items-center w-20 h-20 flex-shrink-0 text-white mr-6">
          <Image src={LogoTransparent} />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
      <div>
        {children}
      </div>
    </>
  );
};

export default Layout
