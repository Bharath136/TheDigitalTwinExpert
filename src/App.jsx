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
import NotFound from './pages/NotFound';
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
            {/* <Route path="/platform" element={<ComingSoon />} />            
            <Route path="/why-us" element={<ComingSoon />} />            
            <Route path="/about" element={<ComingSoon />} />            */}
            {/* <Route path="/insights" element={<ComingSoon />} /> */}
            {/* <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ComingSoon />} />
            <Route path="/products" element={<ComingSoon />} />
            <Route path="/sustainability" element={<ComingSoon />} /> */}
            <Route path="*" element={<NotFound />} />

            <Route path="/platform" element={<Platform />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/services" element={<Industries />} />
            <Route path="/products" element={<Platform />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
