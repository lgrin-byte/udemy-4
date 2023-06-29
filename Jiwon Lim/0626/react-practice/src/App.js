import Footer from "components/Footer";
import Navigation from "components/Navigation";
import About from "pages/About";
import Home from "pages/Home";
import SearchResult from "pages/SearchResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
