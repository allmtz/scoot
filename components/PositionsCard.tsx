import { Button } from "./Button";

interface IPositionsCard {
  positionTitle: string;
  location: string;
}

export const PositionsCard = ({ positionTitle, location }: IPositionsCard) => {
  return (
    <div className="bg-snow p-8 text-center md:flex md:items-center md:justify-between md:gap-40">
      <div className="text-dark-navy">
        <h3 className="text-lg w-[200px]">{positionTitle}</h3>
        <p className="mb-4 text-sm">{location}</p>
      </div>
      <Button text="Apply" />
    </div>
  );
};
