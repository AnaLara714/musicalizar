export default function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="mb-4 bg-white rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <button
        className="w-full p-5 flex items-center justify-between focus:outline-none"
        onClick={onClick}
      >
        <span className="font-medium">{question}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
