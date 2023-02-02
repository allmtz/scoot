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
    <div className="relative flex items-center justify-center overflow-hidden">
      <Image src={mobileSrc} alt="" className="md:hidden" />
      <Image src={tabletSrc} alt="" className="hidden md:inline-block" />
      <Image src={desktopSrc} alt="" className="hidden" />
      <h1 className="absolute text-white text-3xl md:text-5xl md:left-20">
        {pageName}
      </h1>
      <Image
        src={whiteCircles}
        alt=""
        className="hidden md:inline absolute -right-8"
      />
    </div>
  );
};
