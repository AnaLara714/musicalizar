import Footer from "./components/Footer"
import Header from "./components/Header"
import SectionAboutUs from "./components/SectionAboutUs"

function App() {

  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <SectionAboutUs />
     /* <div className="flex flex-1 justify-center items-center bg-sky-400" >
        <Login />
      </div>*/
      <Footer />
    </div>
  )
}

export default App
