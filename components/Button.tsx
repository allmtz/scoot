export const Button = ({ text }: { text: string }) => {
  return (
    <>
      <button className="font-space-mono bg-ylw px-10 py-3 text-white">
        {text}
      </button>
    </>
  );
};
