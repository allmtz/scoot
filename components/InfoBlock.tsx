import Image from "next/image";

import line from "../public/assets/patterns/line.svg";

interface IInfoBlock {
  imgSrc: string;
  title: string;
  description: string;
  alt: string;
}

export const InfoBlock = ({ imgSrc, title, description, alt }: IInfoBlock) => {
  return (
    <div className="relative mt-3 flex flex-col items-center gap-4 p-4 md:flex-row md:gap-20 xl:flex-col">
      <Image src={imgSrc} alt={""} className="z-10" />
      <Image
        src={line}
        alt={""}
        className="absolute -left-10 hidden rotate-90 md:inline xl:left-0 xl:top-14 xl:rotate-0  "
      />
      <Image
        src={line}
        alt={""}
        className="FOR-DESKTOP absolute -right-1 top-14 hidden rotate-0 xl:inline  "
      />
      <div className="FOR-TABLET justify flex flex-col items-center gap-4 md:items-start">
        <h3 className="font-space-mono text-2xl text-dark-navy">{title}</h3>
        <p className="text-center text-dim-grey md:w-[400px] md:text-start">
          {description}
        </p>
      </div>
    </div>
  );
};
