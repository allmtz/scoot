interface IFAQCard {
  question: string;
  answer: string;
}
function toggleCard(e: React.SyntheticEvent<HTMLDivElement>) {
  const parentFAQCard = (e.target as Element).closest(".FAQ-CARD");
  const FAQAnswer = parentFAQCard?.querySelector("p");

  if (FAQAnswer) {
    if (FAQAnswer.style.display != "none") {
      FAQAnswer.style.display = "none";
    } else {
      FAQAnswer.style.display = "block";
    }
  }
}

export const FAQCard = ({ question, answer }: IFAQCard) => {
  return (
    <div
      onClick={toggleCard}
      className="FAQ-CARD bg-snow p-4 hover:bg-light-ylw sm:w-[500px]"
    >
      <header className="flex items-center justify-between">
        <h3 className="text-xl">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          className="w-10"
        >
          <path fill="none" stroke="#FCB72B" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
      </header>

      <p className="FAQ-ANSWER mt-4 font-lexend-deca">{answer}</p>
    </div>
  );
};
