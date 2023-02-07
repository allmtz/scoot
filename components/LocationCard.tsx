export const LocationCard = ({ location }: { location: string }) => {
  return (
    <div className="w-[200px] cursor-default bg-light-ylw py-4 px-8 text-center hover:bg-snow">
      <p>{location}</p>
    </div>
  );
};
