import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { ScrollProvider } from "./context/ScrollContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollProvider>
        <ScrollToTop />
        <AppRoutes />
      </ScrollProvider>
    </Router>
  );
}

export default App;
