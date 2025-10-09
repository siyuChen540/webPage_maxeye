import React from 'react';
import { Database, Satellite, Map, Ship, Cpu, Layers } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CoreBusiness: React.FC = () => {
  const businesses = [
    {
      icon: Database,
      title: 'Data and Services',
      description: 'Provide precise data services from space to the deep sea.',
      items: ['Satellite Remote Sensing Data Processing', 'Geographic Information Services (GIS)'],
    },
    {
      icon: Ship,
      title: 'High-End Equipment Manufacturing',
      description: 'Independently research, develop, and manufacture cutting-edge equipment.',
      items: ['Navigation and Surveying Instruments', 'Meteorological and Oceanographic Instruments', 'Remotely Operated Vehicles (ROVs)'],
    },
    {
      icon: Layers,
      title: 'System Integration & Software',
      description: 'Build an intelligent information system that connects everything.',
      items: ['Large-scale Information System Integration', 'Customized Software Development', 'Big Data Processing'],
    },
  ];

  return (
    <AnimatedSection id="business" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Core Business</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide end-to-end solutions by integrating advanced data services, high-end equipment, and robust software systems.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business) => (
            <div key={business.title} className="bg-card p-8 rounded-xl border border-border transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <business.icon className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-semibold">{business.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{business.description}</p>
              <ul className="space-y-3">
                {business.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CoreBusiness;
