import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@presentation/components/layout/Navbar';
import Footer from '@presentation/components/layout/Footer';
import Home from '@presentation/screens/Home';
import About from '@presentation/screens/About';
import Contact from '@presentation/screens/Contact';
import Solutions from '@presentation/screens/Solutions';
import Industries from '@presentation/screens/Industries';
import DTwinOS from '@presentation/screens/DTwinOS';
import WhyUs from '@presentation/screens/WhyUs';
import Insights from '@presentation/screens/Insights';
import IndustryDetail from '@presentation/screens/IndustryDetail';
import DTwinOSDetail from '@presentation/screens/DTwinOSDetail';
import NotFound from '@presentation/screens/NotFound';
import Sustainability from '@presentation/screens/Sustainability';
import ComingSoon from '@presentation/screens/ComingSoon';
import ScrollToHash from '@presentation/components/common/ScrollToHash';

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
            <Route path="/dtwinos" element={<DTwinOS />} />
            <Route path="/dtwinos/:id" element={<DTwinOSDetail />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/services" element={<Industries />} />
            <Route path="/products" element={<DTwinOS />} />
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
