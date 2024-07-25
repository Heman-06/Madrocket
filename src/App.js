import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Academic from './pages/Academic';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty'
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/admission" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
