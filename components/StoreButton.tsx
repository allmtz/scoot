import Image from "next/image";

interface IStoreButton {
  storeLogo: string;
}

export const StoreButton = ({ storeLogo }: IStoreButton) => {
  return (
    <button>
      <Image src={storeLogo} alt="" className="cursor-pointer" />
    </button>
  );
};
