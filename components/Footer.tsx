import { StoreButton } from "./StoreButton";

import Image from "next/image";
import Link from "next/link";

import appleStore from "../public/assets/icons/app-store.svg";
import googlePlay from "../public/assets/icons/google-play.svg";

import fbLogo from "../public/assets/icons/facebook.svg";
import igLogo from "../public/assets/icons/instagram.svg";
import twitterLogo from "../public/assets/icons/twitter.svg";

import semiCircles from "../public/assets/patterns/semi-circles.svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center font-space-mono mt-20 xl:w-full">
      <div className="relative bg-dark-navy text-center text-2xl px-2 pt-12 xl:flex xl:justify-evenly xl:gap-96 xl:pb-20 xl:w-full ">
        <h2 className="text-white text-3xl w-[300px] mx-auto xl:mx-0 xl:text-start">
          Sign up and Scoot off today
        </h2>
        <div className="flex justify-center mt-5 gap-4">
          <StoreButton storeLogo={appleStore} />
          <StoreButton storeLogo={googlePlay} />
        </div>
        <Image src={semiCircles} alt="" className="mt-4 xl:absolute bottom-0" />
      </div>
      <div className="flex flex-col items-center gap-8 w-full text-white bg-slate-800 md:flex-row md:justify-around md:py-4">
        <p className="text-2xl mt-4 md:mt-0">scoot</p>
        <ul className="text-center leading-10 md:flex md:gap-8 text-dim-grey">
          <li>
            <Link href="/about" className="hover:text-ylw">
              About{" "}
            </Link>
          </li>
          <li>
            <Link href="/location" className="hover:text-ylw">
              Location{" "}
            </Link>
          </li>
          <li>
            <Link href="/careers" className="hover:text-ylw">
              Careers{" "}
            </Link>
          </li>
        </ul>
        <div className="flex gap-4 text-white pb-8 items-center justify-center md:pb-0">
          <Image src={fbLogo} alt="Facebook" />
          <Image src={twitterLogo} alt="Twitter" />
          <Image src={igLogo} alt="Instagram" />
        </div>
      </div>
    </footer>
  );
};
