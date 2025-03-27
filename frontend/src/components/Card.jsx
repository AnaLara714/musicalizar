export default function Card({ children }) {
  return (
    <div className="min-w-max bg-white p-4 rounded-[16px] shadow-lg border-r-8 border-b-8 border-gray-900">
    {children}
  </div>
  );
}
