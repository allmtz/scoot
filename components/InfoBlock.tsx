import Image from "next/image";

interface IInfoBlock {
  imgSrc: string;
  title: string;
  description: string;
  alt: string;
}

export const InfoBlock = ({ imgSrc, title, description, alt }: IInfoBlock) => {
  return (
    <div className="flex flex-col gap-4 items-center p-4 mt-3">
      <Image src={imgSrc} alt={""} />
      <h3 className="font-space-mono text-2xl text-dark-navy">{title}</h3>
      <p className="text-dim-grey text-center">{description}</p>
    </div>
  );
};
