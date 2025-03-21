
import Contact from "./components/Contact"
import CoursesSection from "./components/CoursesSection"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import RegistrationForm from "./components/RegistrationForm"
import SectionAboutUs from "./components/SectionAboutUs"

function App() {

  return (
    <div className="flex flex-col h-screen ">
      <Header />
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
