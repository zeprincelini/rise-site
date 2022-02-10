import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./application/pages/landingPage";
import "./App.css";
import Navigation from "./application/components/navigation/nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
