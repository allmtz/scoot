import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import hamburger from "../public/assets/icons/hamburger.svg";
import close from "../public/assets/icons/close.svg";

export const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
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

      <h2 className="font-bold text-3xl leading-none m-auto text-dark-navy ">
        scoot
      </h2>

      {/* <div>
        <ul role="list" className="flex gap-5 text-dim-grey">
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
    </nav>
  );
};
