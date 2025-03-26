import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { ScrollProvider } from "./context/ScrollContext";
import ScrollToTop from "./components/ScrollToTop";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <Router>
      <ScrollProvider>
        <ScrollToTop />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ScrollProvider>
    </Router>
  );
}

export default App;
