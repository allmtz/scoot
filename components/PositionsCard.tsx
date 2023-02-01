import { Button } from "./Button";

interface IPositionsCard {
  positionTitle: string;
  location: string;
}

export const PositionsCard = ({ positionTitle, location }: IPositionsCard) => {
  return (
    <div className="bg-light-grey p-8 text-center">
      <h3 className="text-lg w-[200px]">{positionTitle}</h3>
      <p className="mb-4 text-sm">{location}</p>
      <Button text="Apply" />
    </div>
  );
};
