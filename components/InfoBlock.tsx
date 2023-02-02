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
    <div className="flex flex-col gap-4 items-center p-4 mt-3 md:flex-row md:gap-20 relative xl:flex-col">
      <Image src={imgSrc} alt={""} className="z-10" />
      <Image
        src={line}
        alt={""}
        className="hidden md:inline absolute -left-10 rotate-90 xl:rotate-0 xl:left-0 xl:top-14  "
      />
      <Image
        src={line}
        alt={""}
        className="FOR-DESKTOP hidden xl:inline absolute rotate-0 -right-1 top-14  "
      />
      <div className="FOR-TABLET flex flex-col items-center justify gap-4 md:items-start">
        <h3 className="font-space-mono text-2xl text-dark-navy">{title}</h3>
        <p className="text-dim-grey text-center md:text-start md:w-[400px]">
          {description}
        </p>
      </div>
    </div>
  );
};
