import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./components/Login"

function App() {

  return (
    <div className="flex flex-col h-screen ">
      <Header />
      
      <div className="flex flex-1 flex-col justify-center items-center bg-sky-300" >
        <Login />
      </div>
      <Footer />
    </div>
  )
};

export default App
