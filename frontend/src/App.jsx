
import Contact from "./components/Contact"
import CoursesSection from "./components/CoursesSection"
import { Routes, Route } from "react-router-dom"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Banner from "./components/Banner"
import RegistrationForm from "./components/RegistrationForm"
import SectionAboutUs from "./components/SectionAboutUs"
import Manager from "./components/Manager"

function App() {

  return (
    <div className="flex flex-col">
      <Header />
      <Banner />
      <SectionAboutUs />
      <CoursesSection />
      <RegistrationForm />
      <FAQSection />
      <Contact/>
      <Footer />
    </div>
  )
};

export default App