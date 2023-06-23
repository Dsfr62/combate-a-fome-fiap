import Image from "next/image";
import { useRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import NavItem from "./nav-item";
import navbarLogo from "@pub/img/febracis-logo-100px.png";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  return (
    <div className="flex h-28 justify-between items-center px-4 bg-white fade-in-1 lg:container">
      <Image
        onClick={() => router.push("/")}
        src={navbarLogo}
        alt="logo"
        className="p-4 lg:px-2 lg:py-2 cursor-pointer max-w-[64px]"
      />
      <div
        className={`lg:w-[100%] lg:visible lg:flex gap-0 lg:gap-2 lg:items-center lg:justify-end
          ${
            !nav
              ? "invisible hidden fade-in-1"
              : "fade-in-1 fixed flex flex-col w-[60%] h-full left-0 top-0 bg-primary-default"
          }
          `}
      >
        <NavItem path="/sobre" currentPath={router.pathname} text={"Sobre"} />
        <NavItem path="/dados" currentPath={router.pathname} text={"Dados"} />
        <NavItem path="/ml5" currentPath={router.pathname} text={"ML5"} />
        <NavItem
          path="/politica"
          currentPath={router.pathname}
          text={"Política"}
        />
        <NavItem
          path="/contato"
          currentPath={router.pathname}
          text={"Contato"}
        />
      </div>
      {!nav ? (
        <HiMenu
          size={40}
          onClick={() => setNav(!nav)}
          className="visible flex lg:invisible lg:hidden text-primary-default cursor-pointer fade-in-1"
        />
      ) : (
        <HiX
          size={40}
          onClick={() => setNav(!nav)}
          className="visible flex lg:invisible lg:hidden text-secondary-default cursor-pointer fade-in-1"
        />
      )}
    </div>
  );
};

export default Navbar;
