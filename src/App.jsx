import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Sustainability from './pages/Sustainability';
import Support from './pages/Support';
import NotFound from './pages/NotFound';
import ScrollToHash from './components/common/ScrollToHash';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/*<Route path="/products" element={<Products />} />
            <Route path="/sustainability" element={<Sustainability />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/support" element={<Support />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
