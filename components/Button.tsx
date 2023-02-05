export const Button = ({ text }: { text: string }) => {
  return (
    <>
      <button className="font-space-mono border-2 border-transparent bg-ylw px-10 py-3 text-white hover:bg-white hover:text-ylw  hover:border-ylw ">
        {text}
      </button>
    </>
  );
};
