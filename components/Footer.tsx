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
    <footer className="mt-20 flex flex-col items-center font-space-mono xl:w-full">
      <div className="relative bg-dark-navy px-2 pt-12 text-center text-2xl xl:flex xl:w-full xl:justify-evenly xl:gap-96 xl:pb-20">
        <h2 className="mx-auto w-[300px] text-3xl text-white xl:mx-0 xl:text-start">
          Sign up and Scoot off today
        </h2>
        <div className="mt-5 flex justify-center gap-4 xl:z-10">
          <StoreButton storeLogo={appleStore} />
          <StoreButton storeLogo={googlePlay} />
        </div>
        <Image src={semiCircles} alt="" className="bottom-0 mt-4 xl:absolute" />
      </div>
      <div className="flex w-full flex-col items-center gap-8 bg-slate-800 text-white md:flex-row md:justify-around md:py-4">
        <Link href="/" className="hover:text-ylw">
          <p className="mt-4 text-2xl md:mt-0">scoot</p>
        </Link>
        <ul className="text-center leading-10 text-dim-grey md:flex md:gap-8">
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
        <div className="flex items-center justify-center gap-4 pb-8 text-white md:pb-0">
          <Image src={fbLogo} alt="Facebook" className="cursor-pointer" />
          <Image src={twitterLogo} alt="Twitter" className="cursor-pointer" />
          <Image src={igLogo} alt="Instagram" className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};
