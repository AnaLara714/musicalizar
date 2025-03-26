import Footer from "../components/Footer";
import Header from "../components/Header";
import Manager from "../components/Manager";

export default function ManagerPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <Manager />
      <Footer />
    </div>
  );
}
