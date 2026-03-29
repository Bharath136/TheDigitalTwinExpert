import {
  FiHeart, FiSettings, FiZap, FiMapPin, FiMonitor, FiTruck, FiGlobe,
  FiBox, FiCpu, FiShare2, FiCommand, FiMap, FiTrendingUp, FiGrid,
  FiActivity, FiBarChart2, FiDatabase, FiWifi, FiNavigation, FiAlertCircle,
  FiSun, FiPackage, FiLayers, FiHome
} from 'react-icons/fi';

export const industryData = {
  'healthcare': {
    name: 'Healthcare',
    img: '/images/unsplash/healthcare.jpg',
    desc: 'Transforming hospitals into intelligent, data-driven ecosystems for better patient care and operational excellence.',
    solutions: [
      {
        icon: FiGrid,
        title: 'Hospital Operational Dashboards',
        desc: 'Centralized dashboards provide real-time visibility into hospital operations—beds, departments, workflows, and performance—enabling faster and smarter decision-making.'
      },
      {
        icon: FiActivity,
        title: 'Patient & Asset Monitoring',
        desc: 'Track patient flow, status, and critical assets (ICU beds, ventilators, equipment) in real-time to improve care quality, safety, and resource allocation.'
      },
      {
        icon: FiSettings,
        title: 'Equipment Utilization Tracking',
        desc: 'Monitor usage, availability, and performance of medical equipment to reduce downtime, optimize utilization, and plan maintenance proactively.'
      },
      {
        icon: FiCommand,
        title: 'Healthcare Command Center Solution',
        desc: 'An integrated control hub that connects all hospital systems—BIM, IoT, clinical, and facility data—enabling centralized monitoring, predictive insights, and coordinated operations.'
      }
    ],
    twinLogo: '🏥',
    twinAcronym: 'HDT',
    twinName: 'DTwinOS Healthcare Twin',
    twinDesc: 'The ultimate operational intelligence layer for modern hospitals.',
    twinLink: '/dtwinos#hdt'
  },

  'industrial': {
    name: 'Industrial & Manufacturing',
    img: '/images/unsplash/industrial.jpg',
    desc: 'Transforming factories into intelligent, self-optimizing systems with real-time visibility, predictive insights, and operational control.',
    solutions: [
      {
        icon: FiMonitor,
        title: 'Live Asset Monitoring & Visualization',
        desc: 'Real-time tracking of machines, production lines, and facility assets through interactive digital twins—providing instant visibility into operational status and performance.'
      },
      {
        icon: FiSettings,
        title: 'Predictive Maintenance & Alerts',
        desc: 'AI-driven analytics detect early signs of equipment failure—enabling proactive maintenance, reducing downtime, and extending asset lifecycle.'
      },
      {
        icon: FiAlertCircle,
        title: 'Anomaly Detection & Insights',
        desc: 'Identify unusual patterns, performance deviations, and process inefficiencies in real time—helping teams take corrective actions before issues escalate.'
      },
      {
        icon: FiBarChart2,
        title: 'Facility Performance Dashboards',
        desc: 'Centralized dashboards track KPIs such as OEE, throughput, energy usage, and production efficiency—enabling data-driven decision-making across operations.'
      }
    ],
    twinLogo: '🏭',
    twinAcronym: 'IDT',
    twinName: 'DTwinOS Industrial Twin',
    twinDesc: 'Unlock unprecedented uptime and production optimization.',
    twinLink: '/dtwinos#idt'
  },

  'energy': {
    name: 'Energy & Utilities',
    img: '/images/unsplash/energy.jpg',
    desc: 'Enabling intelligent, efficient, and resilient energy systems through real-time data, predictive insights, and centralized control.',
    solutions: [
      {
        icon: FiZap,
        title: 'Energy Optimization',
        desc: 'Continuously monitor and optimize energy generation, consumption, and distribution—reducing costs, improving efficiency, and supporting sustainability goals.'
      },
      {
        icon: FiWifi,
        title: 'Real-Time Distribution Tracking',
        desc: 'Track power flow across grids, substations, and networks in real time—enhancing visibility, reducing losses, and improving reliability of supply.'
      },
      {
        icon: FiCpu,
        title: 'Predictive Analytics & Forecasting',
        desc: 'Leverage AI-driven models to forecast demand, detect potential failures, and optimize load management—ensuring stable and efficient energy operations.'
      },
      {
        icon: FiDatabase,
        title: 'Unified Data Environment',
        desc: 'Integrate data from BIM, IoT, SCADA, and enterprise systems into a single platform—providing a holistic view for better decision-making and operational control.'
      }
    ],
    twinLogo: '⚡',
    twinAcronym: 'EDT',
    twinName: 'DTwinOS Energy Twin',
    twinDesc: 'Pioneering the smart grid transition with advanced analytics.',
    twinLink: '/dtwinos#edt'
  },

  'smart-cities': {
    name: 'Smart Cities',
    img: '/images/unsplash/smart-cities.jpg',
    desc: 'Transforming cities into intelligent, connected ecosystems with real-time insights, predictive capabilities, and data-driven urban management.',
    solutions: [
      {
        icon: FiGlobe,
        title: 'City-Scale Digital Twin Solutions',
        desc: 'Create integrated digital replicas of entire cities—combining infrastructure, utilities, mobility, and environment data for holistic city management.'
      },
      {
        icon: FiMap,
        title: 'Infrastructure Monitoring & Optimization',
        desc: 'Continuously monitor roads, buildings, utilities, and public assets—improving performance, reducing maintenance costs, and enhancing service delivery.'
      },
      {
        icon: FiTruck,
        title: 'Transportation & Utility Intelligence',
        desc: 'Optimize traffic flow, public transport, energy, and water systems using real-time data—reducing congestion, improving efficiency, and ensuring reliable services.'
      },
      {
        icon: FiMapPin,
        title: 'Urban Planning & Simulation',
        desc: 'Simulate future city scenarios, development plans, and policy impacts—enabling smarter, sustainable, and risk-free urban decision-making.'
      }
    ],
    twinLogo: '🏙️',
    twinAcronym: 'UDT',
    twinName: 'DTwinOS Urban Twin',
    twinDesc: 'The digital backbone of future-ready, resilient metropolises.',
    twinLink: '/dtwinos#udt'
  },

  'built-environment': {
    name: 'Built Environment & Infrastructure',
    img: '/images/unsplash/built-environment.jpg',
    desc: 'Connecting design, construction, and operations into a unified, data-driven ecosystem for smarter, more efficient asset delivery and management.',
    solutions: [
      {
        icon: FiBox,
        title: 'BIM Modeling & Coordination',
        desc: 'Develop accurate, data-rich 3D models with multi-disciplinary coordination—reducing clashes, improving design quality, and ensuring seamless project execution.'
      },
      {
        icon: FiLayers,
        title: 'Design → Build → Operate Integration',
        desc: 'Enable continuous data flow across the entire lifecycle—ensuring that design intent, construction data, and operational information remain fully connected.'
      },
      {
        icon: FiDatabase,
        title: 'Model-Based Asset Information Management',
        desc: 'Transform BIM models into intelligent asset databases—capturing critical information for maintenance, operations, and long-term asset performance.'
      },
      {
        icon: FiHome,
        title: 'Asset Lifecycle & Space Utilization',
        desc: 'Monitor asset performance and space usage in real time—optimizing facility operations, improving efficiency, and maximizing return on investment.'
      }
    ],
    twinLogo: '🏗️',
    twinAcronym: 'BDT',
    twinName: 'DTwinOS Built Twin',
    twinDesc: 'Bridging the physical and digital divide for facility lifecycle mastery.',
    twinLink: '/dtwinos#bdt'
  },

  'transportation': {
    name: 'Transportation',
    img: '/images/unsplash/transportation.jpg',
    desc: 'Enabling intelligent, connected, and efficient transportation networks through real-time monitoring, predictive insights, and centralized control.',
    solutions: [
      {
        icon: FiPackage,
        title: 'Logistics Network Intelligence',
        desc: 'Gain end-to-end visibility across logistics networks—tracking movement of goods, vehicles, and assets to optimize routes, reduce delays, and improve supply chain efficiency.'
      },
      {
        icon: FiNavigation,
        title: 'Airports, Rail & Highway Optimization',
        desc: 'Monitor and optimize operations across transportation systems—improving traffic flow, passenger experience, asset utilization, and overall network performance.'
      },
      {
        icon: FiCommand,
        title: 'Centralized Dashboards for Monitoring',
        desc: 'Unified command dashboards provide real-time insights into transportation operations—enabling faster decision-making and coordinated management across multiple systems.'
      },
      {
        icon: FiAlertCircle,
        title: 'Incident Management & Alert Systems',
        desc: 'Detect disruptions, accidents, or system failures in real time—triggering automated alerts and enabling rapid response to minimize impact and ensure safety.'
      }
    ],
    twinLogo: '🚆',
    twinAcronym: 'TDT',
    twinName: 'DTwinOS Transport Twin',
    twinDesc: 'Logistics and mobility networks driven by continuous intelligence.',
    twinLink: '/dtwinos#tdt'
  },

  'sustainability': {
    name: 'Sustainability & Net-Zero',
    img: '/images/unsplash/sustainability.jpg',
    desc: 'Empowering organizations to achieve sustainability goals through real-time monitoring, data-driven insights, and intelligent optimization of environmental performance.',
    solutions: [
      {
        icon: FiGlobe,
        title: 'Carbon Tracking & ESG Reporting',
        desc: 'Monitor and manage Scope 1, 2, and 3 emissions with automated ESG reporting—ensuring compliance, transparency, and informed sustainability decisions.'
      },
      {
        icon: FiZap,
        title: 'Energy Optimization',
        desc: 'Analyze and optimize energy consumption across assets and operations—reducing waste, lowering costs, and improving overall efficiency.'
      },
      {
        icon: FiBarChart2,
        title: 'Sustainability Analytics',
        desc: 'Leverage advanced analytics to track environmental performance, resource usage, and sustainability KPIs—enabling continuous improvement and smarter decision-making.'
      },
      {
        icon: FiSun,
        title: 'Net-Zero Strategy Implementation',
        desc: 'Translate sustainability goals into actionable roadmaps—supporting carbon reduction, renewable integration, and long-term net-zero achievement.'
      }
    ],
    twinLogo: '🌱',
    twinAcronym: 'SDT',
    twinName: 'DTwinOS Sustainability Twin',
    twinDesc: 'The definitive platform for verified, actionable environmental tracking.',
    twinLink: '/dtwinos#sdt'
  }
};
