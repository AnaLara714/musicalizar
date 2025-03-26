import Contact from "../components/Contact";
import CoursesSection from "../components/CoursesSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import RegistrationForm from "../components/RegistrationForm";
import SectionAboutUs from "../components/SectionAboutUs";

function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Banner />
      <div id="about-us">
        <SectionAboutUs />
      </div>
      <div id="courses">
        <CoursesSection />
      </div>
      <div id="registration">
        <RegistrationForm />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
