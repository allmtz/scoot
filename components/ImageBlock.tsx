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
    <div className="relative flex flex-col gap-4 items-center p-4 mt-3 xl:flex-row xl:gap-40 xl:mt-20">
      {imgSrc && arrowSrc && (
        <>
          <div className="relative">
            <Image src={imgSrc} alt={""} className="rounded-full" />
          </div>
          <Image src={arrowSrc} alt="" className="absolute top-1/4" />
        </>
      )}

      <div className="flex flex-col gap-4 items-center ">
        <h3 className="font-space-mono text-2xl text-center text-dark-navy md:text-4xl xl:mt-8">
          {title}
        </h3>
        <p className="text-dim-grey text-center max-w-xl">{description}</p>
        {children}
      </div>
    </div>
  );
};
