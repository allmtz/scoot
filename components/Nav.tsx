import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import hamburger from "../public/assets/icons/hamburger.svg";
import close from "../public/assets/icons/close.svg";
import { MobileNav } from "./MobileNav";
import { Button } from "./Button";

export const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 mx-auto flex max-w-[1440px] items-center bg-white p-3 font-space-mono md:justify-between">
        {navIsOpen ? (
          <Image
            src={close}
            alt={"close navigation menu"}
            className="w-[20px] cursor-pointer md:hidden"
            onClick={() => setNavIsOpen(false)}
          />
        ) : (
          <Image
            src={hamburger}
            alt={"open navigation menu"}
            className="w-[20px] cursor-pointer md:hidden"
            onClick={() => setNavIsOpen(true)}
          />
        )}
        <Link href={"/"} className="m-auto md:m-0">
          <h2 className="text-3xl font-bold leading-none text-dark-navy">
            scoot
          </h2>
        </Link>
        <ul className="hidden md:flex md:gap-8 lg:gap-12">
          <li>
            <Link href={"/about"} className="hover:text-dim-grey">
              About
            </Link>
          </li>
          <li>
            <Link href={"/location"} className="hover:text-dim-grey">
              Locations
            </Link>
          </li>
          <li>
            <Link href={"/careers"} className="hover:text-dim-grey">
              Careers
            </Link>
          </li>
        </ul>
        <div className="hidden md:inline">
          <Button text="Get Scootin" />
        </div>
      </nav>
      <MobileNav navIsOpen={navIsOpen} />
    </>
  );
};
