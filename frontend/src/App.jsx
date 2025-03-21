import CoursesSection from "./components/CoursesSection"
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
      <Footer />
    </div>
  )
}

export default App
