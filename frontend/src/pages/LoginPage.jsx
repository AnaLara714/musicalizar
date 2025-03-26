import Login from "../components/Login";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function LoginPage() {
  return (
    <div className="flex flex-col">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}
