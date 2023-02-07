import Image, { StaticImageData } from "next/image";

interface INumberedImage {
  imgSrc: StaticImageData;
  imgNumber: string;
  title: string;
  description: string;
}

export const NumberedImage = ({
  imgSrc,
  imgNumber,
  title,
  description,
}: INumberedImage) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={imgSrc} alt="" className="rounded-full"></Image>
      <div className="-mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-ylw">
        <p className="text-dark-navy">{imgNumber}</p>
      </div>
      <p className="mt-4 text-2xl text-dark-navy">{title}</p>
      <p className="mt-8 max-w-xl text-center text-dim-grey">{description}</p>
    </div>
  );
};
