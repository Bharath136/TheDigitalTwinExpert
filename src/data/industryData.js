import {
  FiHeart, FiSettings, FiZap, FiMapPin, FiMonitor, FiTruck, FiGlobe,
  FiBox, FiCpu, FiShare2, FiCommand, FiMap, FiTrendingUp
} from 'react-icons/fi';

export const industryData = {
  'healthcare': {
    name: 'Healthcare',
    img: '/images/unsplash/healthcare.jpg',
    desc: 'Transform hospitals into intelligent, highly efficient care environments. Healthcare Digital Twins optimize patient flow, track critical assets in real-time, and ensure optimal environmental conditions for superior patient outcomes.',
    challenges: [
      { name: 'Asset Management', desc: 'Difficulty tracking critical medical equipment leading to delays in care.', icon: FiBox },
      { name: 'Energy Costs', desc: 'Hospitals consume vast amounts of energy with limited optimization.', icon: FiZap },
      { name: 'Patient Flow', desc: 'Inefficient routing and bed management causing emergency room bottlenecks.', icon: FiTrendingUp }
    ],
    capabilities: [
      { title: 'Healthcare Digital Twins', icon: FiHeart, bullets: ['Hospital operational dashboards', 'Patient and asset monitoring', 'Equipment utilization tracking', 'Healthcare command center solutions'] },
      { title: 'Digital Twin Operations', icon: FiMonitor, bullets: ['Live asset monitoring and visualization', 'Facility performance dashboards', 'Predictive maintenance and alerts', 'Asset lifecycle and space utilization tracking'] },
      { title: 'AI & Data Intelligence', icon: FiCpu, bullets: ['Predictive analytics and forecasting', 'AI-driven decision support', 'Anomaly detection and insights'] }
    ],
    twinLogo: '🏥',
    twinAcronym: 'HDT',
    twinName: 'DTwinOS Healthcare Twin',
    twinDesc: 'The ultimate operational intelligence layer for modern hospitals.',
    twinLink: '/platform#hdt'
  },
  'industrial': {
    name: 'Industrial & Manufacturing',
    img: '/images/unsplash/industrial.jpg',
    desc: 'Unleash the power of Industry 4.0. Connect your entire production line, predict machinery failures before they happen, and create a fully visible, highly optimized manufacturing ecosystem.',
    challenges: [
      { name: 'Unplanned Downtime', desc: 'Unexpected machinery failures causing massive production delays and revenue loss.', icon: FiSettings },
      { name: 'Supply Chain Sync', desc: 'Disconnected parts logistics leading to inefficient assembly lines.', icon: FiShare2 },
      { name: 'Quality Control', desc: 'Suboptimal environmental factors causing manufacturing defects.', icon: FiCpu }
    ],
    capabilities: [
      { title: 'Digital Twin Operations', icon: FiMonitor, bullets: ['Live asset monitoring and visualization', 'Facility performance dashboards', 'Predictive maintenance and alerts'] },
      { title: 'Command & Control Centers', icon: FiCommand, bullets: ['Centralized dashboards for real-time monitoring', 'Multi-site and multi-project visibility', 'KPI tracking and reporting'] },
      { title: 'Lifecycle Asset Management', icon: FiTrendingUp, bullets: ['End-to-end asset lifecycle tracking', 'Maintenance planning and optimization', 'Design → Build → Operate integration'] }
    ],
    twinLogo: '🏭',
    twinAcronym: 'IDT',
    twinName: 'DTwinOS Industrial Twin',
    twinDesc: 'Unlock unprecedented uptime and production optimization.',
    twinLink: '/platform#idt'
  },
  'energy': {
    name: 'Energy & Utilities',
    img: '/images/unsplash/energy.jpg',
    desc: 'Balance grid supply and demand intelligently. Track renewable output, simulate load distribution, and extend the lifespan of critical energy infrastructure with predictive Digital Twin models.',
    challenges: [
      { name: 'Grid Instability', desc: 'Difficulty balancing renewable energy sources with fluctuating peak demands.', icon: FiZap },
      { name: 'Aging Infrastructure', desc: 'Lack of visibility into the structural health of legacy power grids.', icon: FiMonitor },
      { name: 'Regulatory Compliance', desc: 'Strict emission tracking and reporting requirements across utilities.', icon: FiGlobe }
    ],
    capabilities: [
      { title: 'Sustainability & Net-Zero Solutions', icon: FiGlobe, bullets: ['Carbon tracking and ESG reporting', 'Energy optimization', 'Sustainability analytics'] },
      { title: 'Smart Infrastructure & Cities', icon: FiMap, bullets: ['Infrastructure monitoring and optimization', 'Transportation and utility intelligence'] },
      { title: 'AI & Data Intelligence', icon: FiCpu, bullets: ['Predictive analytics and forecasting', 'AI-driven decision support', 'Anomaly detection and insights'] }
    ],
    twinLogo: '⚡',
    twinAcronym: 'EDT',
    twinName: 'DTwinOS Energy Twin',
    twinDesc: 'Pioneering the smart grid transition with advanced analytics.',
    twinLink: '/platform#edt'
  },
  'smart-cities': {
    name: 'Smart Cities',
    img: '/images/unsplash/smart-cities.jpg',
    desc: 'Empower civic leaders with a unified urban brain. Integrate data from traffic, utilities, zoning, and public services to design citizen-centric, highly livable, and responsive urban environments.',
    challenges: [
      { name: 'Traffic Congestion', desc: 'Siloed traffic light systems causing massive urban gridlock and pollution.', icon: FiTruck },
      { name: 'Resource Allocation', desc: 'Inefficient distribution of city services and emergency responders.', icon: FiMapPin },
      { name: 'Urban Planning', desc: 'Lack of predictive models to simulate the impact of new zoning laws.', icon: FiMap }
    ],
    capabilities: [
      { title: 'Smart Infrastructure & Cities', icon: FiMap, bullets: ['City-scale Digital Twin solutions', 'Infrastructure monitoring and optimization', 'Transportation and utility intelligence', 'Urban planning and simulation'] },
      { title: 'Command & Control Centers', icon: FiCommand, bullets: ['Centralized dashboards for real-time monitoring', 'Incident management and alert systems', 'Multi-site and multi-project visibility'] },
      { title: 'Interoperability & Integration', icon: FiShare2, bullets: ['Seamless integration with BIM, IoT, ERP', 'Open data standards and API-based connectivity', 'Unified data environment across platforms'] }
    ],
    twinLogo: '🏙️',
    twinAcronym: 'UDT',
    twinName: 'DTwinOS Urban Twin',
    twinDesc: 'The digital backbone of future-ready, resilient metropolises.',
    twinLink: '/platform#udt'
  },
  'built-environment': {
    name: 'Built Environment & Infrastructure',
    img: '/images/unsplash/built-environment.jpg',
    desc: 'Revolutionize the entire lifecycle of capital projects. Connect spatial BIM data directly into facility management, closing the gap between design intent and operational reality.',
    challenges: [
      { name: 'Data Loss at Handover', desc: 'Critical design and construction data is lost when handed over to operations.', icon: FiShare2 },
      { name: 'Space Underutilization', desc: 'Commercial real estate paying heating/cooling for empty spaces.', icon: FiMonitor },
      { name: 'Clash Management', desc: 'Late-stage construction clashes causing expensive rework and delays.', icon: FiBox }
    ],
    capabilities: [
      { title: 'BIM & Digital Engineering', icon: FiBox, bullets: ['BIM modeling and coordination', 'Clash detection and design validation', 'Multi-disciplinary collaboration', 'Model-based asset information management'] },
      { title: 'Smart Construction Management', icon: FiMapPin, bullets: ['Real-time construction progress tracking', 'Quality, safety, and issue management', 'Field-to-office digital workflows'] },
      { title: 'Lifecycle Asset Management', icon: FiTrendingUp, bullets: ['End-to-end asset lifecycle tracking', 'Design → Build → Operate integration', 'Digital handover and asset intelligence'] }
    ],
    twinLogo: '🏗️',
    twinAcronym: 'BDT',
    twinName: 'DTwinOS Built Twin',
    twinDesc: 'Bridging the physical and digital divide for facility lifecycle mastery.',
    twinLink: '/platform#bdt'
  },
  'transportation': {
    name: 'Transportation',
    img: '/images/unsplash/transportation.jpg',
    desc: 'Keep the world moving. Optimize logistics hubs, railway networks, and airport terminals through real-time tracking, predictive scheduling, and passenger flow simulation.',
    challenges: [
      { name: 'Network Delays', desc: 'Cascading network delays across rail and air infrastructure due to localized issues.', icon: FiTruck },
      { name: 'Fleet Maintenance', desc: 'Maintenance schedules based on time rather than actual asset health.', icon: FiSettings },
      { name: 'Passenger Experience', desc: 'Overcrowding and bottlenecks during peak transit hours.', icon: FiHeart }
    ],
    capabilities: [
      { title: 'Smart Infrastructure & Cities', icon: FiMap, bullets: ['Transportation and utility intelligence', 'Infrastructure monitoring and optimization'] },
      { title: 'Command & Control Centers', icon: FiCommand, bullets: ['Multi-site and multi-project visibility', 'Incident management and alert systems', 'Centralized dashboards for real-time monitoring'] },
      { title: 'AI & Data Intelligence', icon: FiCpu, bullets: ['What-if scenario simulation', 'Predictive analytics and forecasting', 'Anomaly detection and insights'] }
    ],
    twinLogo: '🚆',
    twinAcronym: 'TDT',
    twinName: 'DTwinOS Transport Twin',
    twinDesc: 'Logistics and mobility networks driven by continuous intelligence.',
    twinLink: '/platform#tdt'
  },
  'sustainability': {
    name: 'Sustainability & Net-Zero',
    img: '/images/unsplash/sustainability.jpg',
    desc: 'Turn sustainability targets into actionable operational directives. Track carbon footprints across global portfolios and simulate net-zero strategies before capital expenditure.',
    challenges: [
      { name: 'Dispersed ESG Data', desc: 'Inability to aggregate energy consumption across diverse geo-locations.', icon: FiGlobe },
      { name: 'Compliance Risks', desc: 'Failing to meet strict government mandates for carbon reduction.', icon: FiCommand },
      { name: 'Inefficient HVAC', desc: 'Massive energy waste due to static, non-adaptive building controls.', icon: FiZap }
    ],
    capabilities: [
      { title: 'Sustainability & Net-Zero Solutions', icon: FiGlobe, bullets: ['Carbon tracking and ESG reporting', 'Energy optimization', 'Sustainability analytics', 'Net-zero strategy implementation'] },
      { title: 'Digital Twin Operations', icon: FiMonitor, bullets: ['Facility performance dashboards', 'Live asset monitoring and visualization'] },
      { title: 'Interoperability & Integration', icon: FiShare2, bullets: ['Unified data environment across platforms', 'Seamless integration with BIM, IoT, ERP'] }
    ],
    twinLogo: '🌱',
    twinAcronym: 'SDT',
    twinName: 'DTwinOS Sustainability Twin',
    twinDesc: 'The definitive platform for verified, actionable environmental tracking.',
    twinLink: '/platform#sdt'
  }
};
