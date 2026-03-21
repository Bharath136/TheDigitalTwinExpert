import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Platform from './pages/Platform';
import WhyUs from './pages/WhyUs';
import Insights from './pages/Insights';
import IndustryDetail from './pages/IndustryDetail';
import PlatformDetail from './pages/PlatformDetail';
import NotFound from './pages/NotFound';
import Sustainability from './pages/Sustainability';
import ComingSoon from './pages/ComingSoon';
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
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:id" element={<IndustryDetail />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/platform/:id" element={<PlatformDetail />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/services" element={<Industries />} />
            <Route path="/products" element={<Platform />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/support" element={<ComingSoon />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
