import React from "react";
import clsx from "clsx";
import Image from "next/image";
import LogoTransparent from "../../public/onlyLogo.png";

type Classes = {
  navColor: "bg-transparent" | "bg-white";
  navLetter: "text-black" | "text-white";
};

interface Props {}

const Layout: React.FunctionComponent<Props> = ({children}) => {
  const [classes, setClasses] = React.useState<Classes>({
    navColor: "bg-transparent",
    navLetter: "text-white",
  });

  const handleSetClass = (arg: Partial<Classes>) => {
    setClasses((prev) => ({...prev, ...arg}));
  };

  React.useEffect(() => {

    const scrollHandler = () => {
      if (window.scrollY > 200) {
        if (classes.navColor === "bg-transparent") {
          handleSetClass({navColor: "bg-white", navLetter: "text-black"});
        }
      } else {
        if (classes.navColor === "bg-white") {
          handleSetClass({
            navColor: "bg-transparent",
            navLetter: "text-white",
          });
        }
      }
    };

    window.removeEventListener("scroll", scrollHandler);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [classes]);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 z-10 flex items-center justify-between flex-wrap z-50 w-full shadow-xl",
          "transition duration-500 ease-in-out",
          classes.navColor,
          classes.navLetter
        )}
      >
        <div className="flex items-center w-20 h-20 flex-shrink-0 mr-6">
          <Image src={LogoTransparent} className='text-red-200' />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
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
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default Layout;
