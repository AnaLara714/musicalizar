
import Contact from "./components/Contact"
import CoursesSection from "./components/CoursesSection"
import { Routes, Route } from "react-router-dom"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import RegistrationForm from "./components/RegistrationForm"
import SectionAboutUs from "./components/SectionAboutUs"
import Manager from "./components/Manager"

function App() {

  return (
    <div className="flex flex-col min-h-screen ">
      <Header className="flex-shrink-0 " />

      <main className="flex-grow bg-[#7FE7FF]" >
        <Routes>
          <Route path="/gerenciador" element={<Manager />} />
          <Route path="/" element={
            <>
              <SectionAboutUs />
              <CoursesSection />
              <RegistrationForm />
              <FAQSection />
              <Contact />
            </>
          } />
        </Routes>
      </main>

      <Footer className="flex-shrink-0 " />
    </div >
  )
};

export default App