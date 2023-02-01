import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import hamburger from "../public/assets/icons/hamburger.svg";
import close from "../public/assets/icons/close.svg";

export const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <nav className="font-space-mono items-center flex p-3 bg-white">
        {menuIsOpen ? (
          <Image
            src={close}
            alt={"close navigation menu"}
            onClick={() => setMenuIsOpen(false)}
          />
        ) : (
          <Image
            src={hamburger}
            alt={"open navigation menu"}
            onClick={() => setMenuIsOpen(true)}
          />
        )}

        <Link href={"/"} className="m-auto">
          <h2 className="font-bold text-3xl leading-none text-dark-navy ">
            scoot
          </h2>
        </Link>
      </nav>

      {/* WIP sliding mobile nav  */}
      {/* <div className="bg-clear-gray z-20 h-full w-full absolute">
        <ul
          role="list"
          className="flex flex-col gap-5 bg-slate-700 absolute left-0 z-20 h-full"
        >
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/location"}>Location</Link>
          </li>
          <li>
            <Link href={"/careers"}>Careers</Link>
          </li>
        </ul>
      </div> */}
    </>
  );
};
