import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import Image from "next/image";
import LogoTransparent from "../../public/onlyLogo.png";
import Button from "../../shared/components/Button";
import { connectMetamask } from "../../shared/web3";
import { Telegram, GitHub, LinkedIn } from "@mui/icons-material";

type Classes = {
  navColor: "bg-transparent" | "bg-white" | "bg-one";
  navLetter: "text-black" | "text-white";
};

interface Props {}

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const { pathname } = useRouter();
  const [classes, setClasses] = React.useState<Classes>({
    navColor: pathname === "/create" ? "bg-one" : "bg-transparent",
    navLetter: "text-white",
  });

  const handleSetClass = (arg: Partial<Classes>) => {
    setClasses((prev) => ({ ...prev, ...arg }));
  };

  React.useEffect(() => {
    if (pathname === "/create") setClasses({ navColor: "bg-one", navLetter: "text-white" });
  }, [pathname]);

  React.useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 200) {
        if (classes.navColor === "bg-transparent") {
          handleSetClass({ navColor: "bg-white", navLetter: "text-black" });
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
          <Image src={LogoTransparent} className="text-red-200" />
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
          <div className="text-sm lg:flex-grow flex">
            <div className="mr-4">
              <Link href="/">Home</Link>
            </div>
            <div className="mr-4">
              <Link href="/create">Create</Link>
            </div>
          </div>
        </div>
        {pathname === "/create" && (
          <Button className="m-4" onClick={connectMetamask}>
            Connect metamask
          </Button>
        )}
      </nav>
      <div style={{ scrollBehavior: "smooth" }}>{children}</div>
      <footer
        className={clsx(
          "flex justify-start items-center w-full z-10 bg-one p-10 flex-col relative",
          "grid grid-cols-2",
          "text-white"
        )}
        style={{ height: "30vh" }}
      >
        <div className="flex justify-center">
          <Link href="/">CryptoMaker App</Link>
        </div>
        <div className="flex justify-center">
          Developer:{" "}
          <a
            href="https://www.linkedin.com/in/rafael-contreras-pimentel-8b0b67203"
            className="text-yellow-500 ml-4"
            target="_blank"
          >
            rcontre360.io
          </a>
        </div>
        <div className="flex justify-center">
          <Link href="/create">Create Token!</Link>
        </div>
        <div className="flex justify-center">
          <a href="https://t.me/Rcontre360" target="_blank">
            <Telegram />
          </a>
          <a href="https://github.com/Rcontre360" target="_blank">
            <GitHub className="mx-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-contreras-pimentel-8b0b67203"
            target="_blank"
          >
            <LinkedIn />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
