export const LocationCard = ({ location }: { location: string }) => {
  return (
    <div className="bg-light-ylw py-4 px-8 w-[200px] text-center">
      <p>{location}</p>
    </div>
  );
};
