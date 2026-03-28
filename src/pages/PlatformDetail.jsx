import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import PlatformSection from '../components/sections/PlatformSection';
import CircularDiagram from '../components/common/CircularDiagram';
import CTA from '../components/common/CTA';
import { platformData } from '../data/platformData';

const PlatformDetail = () => {
  const { id } = useParams();
  const data = platformData.find(item => item.id === id);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return <Navigate to="/platform" replace />;
  }

  // Map the top 10 features for the circular diagram
  const mapFeaturesToDiagramItems = () => {
    if (!data.features) return [];
    return data.features.slice(0, 10).map((f, idx) => ({
      id: idx,
      title: f.title,
      description: f.desc,
      icon: `${idx + 1}`
    }));
  };

  return (
    <main>
      <Hero
        title={data.title}
        subtitle="DTwinOS Platform Solution"
        image={data.image}
        height="min-h-[50vh]"
      />

      {/* Overview Section without full features */}
      <PlatformSection data={data} reverse={false} hideLink={true} showFeatures={false} />

      {/* Feature Wheel Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-800">Core Capabilities</h2>
             <p className="text-slate-600 mt-2">Interactive overview of the {data.title} ecosystem</p>
          </div>
          <CircularDiagram 
            centerTitle={data.title}
            centerSubtitle="Ecosystem"
            items={mapFeaturesToDiagramItems()}
          />
        </div>
      </section>

      {/* Quick Navigation Footer */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-8">Explore Other Platform Solutions</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {platformData.filter(item => item.id !== id).map(item => (
              <Link 
                key={item.id} 
                to={`/platform/${item.id}`}
                className="px-6 py-3 bg-white text-slate-800 rounded-full font-medium shadow-sm hover:shadow-md hover:bg-blue-50 hover:text-blue-600 transition-all border border-slate-200"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={`Ready to deploy ${data.title} Digital Twin?`}
        buttonText="Request Demo"
        buttonLink="/contact"
      />
    </main>
  );
};

export default PlatformDetail;
