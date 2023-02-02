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
      <div className="flex items-center justify-center -mt-6 rounded-full bg-ylw h-16 w-16 ">
        <p className="text-dark-navy">{imgNumber}</p>
      </div>
      <p className="text-dark-navy text-2xl mt-4">{title}</p>
      <p className="text-center text-dim-grey mt-8 max-w-xl">{description}</p>
    </div>
  );
};
