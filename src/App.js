import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./application/pages/landingPage";
import Navigation from "./application/components/navigation/nav";
import Footer from "./application/components/footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
