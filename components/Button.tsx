export const Button = ({ text }: { text: string }) => {
  return (
    <>
      <button className="border-2 border-transparent bg-ylw px-10 py-3 font-space-mono text-white hover:border-ylw hover:bg-white hover:text-ylw">
        {text}
      </button>
    </>
  );
};
