import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes />
      </div>
    </Router>
  );
};

export default App;
