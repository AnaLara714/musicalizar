import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/Routes";
import { ScrollProvider } from "./context/ScrollContext";

function App() {
  return (
    <Router>
      <ScrollProvider>
        <AppRoutes />
      </ScrollProvider>
    </Router>
  );
}

export default App;
