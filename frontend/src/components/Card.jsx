export default function Card({ children }) {
  return (
    <div className=" w-2/5 max-md:w-3/4 bg-white p-4 rounded-[16px] shadow-lg border-r-8 border-b-8 border-gray-900">
      {children}
    </div>
  );
}
