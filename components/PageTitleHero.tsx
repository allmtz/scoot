import Image, { StaticImageData } from "next/image";

import whiteCircles from "../public/assets/patterns/white-circles.svg";

interface IPageTitleHero {
  pageName: string;
  mobileSrc: StaticImageData;
  tabletSrc: StaticImageData;
  desktopSrc: StaticImageData;
}

export const PageTitleHero = ({
  pageName,
  mobileSrc,
  tabletSrc,
  desktopSrc,
}: IPageTitleHero) => {
  return (
    <div className="relative mx-auto flex max-w-fit items-center justify-center overflow-hidden">
      <Image src={mobileSrc} alt="" className="md:hidden" />
      <Image
        src={tabletSrc}
        alt=""
        className="hidden md:inline-block xl:hidden"
      />
      <Image src={desktopSrc} alt="" className="hidden xl:inline" />
      <h1 className="absolute text-3xl text-white md:left-20 md:text-5xl xl:left-40">
        {pageName}
      </h1>
      <Image
        src={whiteCircles}
        alt=""
        className="absolute -right-8 hidden md:inline"
      />
    </div>
  );
};
