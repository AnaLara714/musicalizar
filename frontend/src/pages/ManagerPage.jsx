import Footer from "../components/Footer";
import Header from "../components/Header";
import Manager from "../components/Manager";

export default function ManagerPage() {
  return (
    <div className="flex flex-col min-h-screen  bg-[#7FE7FF]">
      <Header />
      <Manager />
      <Footer />
    </div>
  );
}
