import Image, { StaticImageData } from "next/image";
import React from "react";

// typing the `children` prop
// https://www.carlrippon.com/react-children-with-typescript/
interface IImageBlock {
  imgSrc?: StaticImageData;
  title: string;
  description: string;
  arrowSrc?: string;
  arrowDirection?: string;
  children?: React.ReactNode;
}

export const ImageBlock = ({
  imgSrc,
  title,
  description,
  arrowSrc,
  arrowDirection,
  children,
}: IImageBlock) => {
  return (
    <div className="relative mt-3 flex flex-col items-center gap-4 p-4 xl:mt-20 xl:flex-row xl:gap-40">
      {imgSrc && arrowSrc && (
        <>
          <div className="relative">
            <Image src={imgSrc} alt={""} className="rounded-full" />
          </div>
          <Image src={arrowSrc} alt="" className="absolute top-1/4" />
        </>
      )}

      <div className="flex flex-col items-center gap-4 ">
        <h3 className="text-center font-space-mono text-2xl text-dark-navy md:text-4xl xl:mt-8">
          {title}
        </h3>
        <p className="max-w-xl text-center text-dim-grey">{description}</p>
        {children}
      </div>
    </div>
  );
};
