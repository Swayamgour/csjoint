// // import logo from './logo.svg';
import './App.css';
import './custom.css';
// import Home from './pages/Home/Home';
// import Navbar from './pages/Navbar';

// function App() {
//   return (
//     <>

//     </>
//   );
// }

// export default App;



// import './App.css';
// import './custom.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from './pages/Navbar';
import Home from './pages/Home/Home';
import About from "./pages/About";
import Magnize from './pages/Magnize';
import From from './pages/From';
import Footer from './pages/Footer';
import HalfOfFame from './pages/HalfOfFame';
import Courses from './pages/Courses';
import GtoTrain from './pages/Home/GtoTrain';
import ScrollToTop from './components/ScrollToTop';
import SsbPage from './pages/SsbPage';
import Background from '../src/components/Background';
import Contact from './pages/Contact';
import Login from './pages/Login';
// import About from './pages/About/About';
// import More from './pages/More/More';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Magazine" element={<Magnize />} />
        <Route path="/HalfOfFame" element={<HalfOfFame />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/GtoTrain" element={<GtoTrain />} />
        <Route path="/SsbPage" element={<SsbPage />} />
        <Route path="/ContactUS" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/more" element={<More />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;


//  <Navbar />
//       <Home />
