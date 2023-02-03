interface IFAQCard {
  question: string;
  answer: string;
}

export const FAQCard = ({ question, answer }: IFAQCard) => {
  return (
    <div className="bg-snow p-4">
      <header className="flex items-center justify-between">
        <h3 className=" text-xl">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          className="w-10"
        >
          <path
            fill="none"
            stroke="#FCB72B"
            stroke-width="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </header>

      <p className="mt-4 font-lexend-deca">{answer}</p>
    </div>
  );
};
