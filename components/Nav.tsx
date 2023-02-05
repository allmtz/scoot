import Link from "next/link";
import Image from "next/image";

import { Dispatch, SetStateAction } from "react";

import hamburger from "../public/assets/icons/hamburger.svg";
import close from "../public/assets/icons/close.svg";
import { MobileNav } from "./MobileNav";
import { Button } from "./Button";

export const Nav = ({
  navIsOpen,
  setNavIsOpen,
}: {
  navIsOpen: boolean;
  setNavIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <nav className="sticky top-0 z-50 max-w-[1440px] mx-auto font-space-mono flex items-center p-3 bg-white md:justify-between">
        {navIsOpen ? (
          <Image
            src={close}
            alt={"close navigation menu"}
            className="cursor-pointer w-[20px] md:hidden"
            onClick={() => setNavIsOpen(false)}
          />
        ) : (
          <Image
            src={hamburger}
            alt={"open navigation menu"}
            className="cursor-pointer w-[20px] md:hidden"
            onClick={() => setNavIsOpen(true)}
          />
        )}
        <Link href={"/"} className="m-auto md:m-0">
          <h2 className="font-bold text-3xl leading-none text-dark-navy">
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
