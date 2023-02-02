import Image, { StaticImageData } from "next/image";
import { Button } from "./Button";

interface IImageBlock {
  imgSrc?: StaticImageData;
  title: string;
  description: string;
  arrowSrc?: string;
  arrowDirection?: string;
}

export const ImageBlock = ({
  imgSrc,
  title,
  description,
  arrowSrc,
  arrowDirection,
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
        <Button text="Learn More" />
      </div>
    </div>
  );
};
