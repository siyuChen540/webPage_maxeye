import React from 'react';
import { Drone, Leaf, Ship, Bot } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FutureLayout: React.FC = () => {
  const layouts = [
    {
      icon: Drone,
      title: 'Nuclear Power Coastal Cruise Drone Swarms',
      description: 'Building an efficient and intelligent coastal security monitoring network.',
    },
    {
      icon: Leaf,
      title: 'Vegetation Monitoring Ecosystem',
      description: 'Utilizing space and aerial technologies to protect and monitor the Earth\'s "green heart".',
    },
    {
      icon: Ship,
      title: 'Marine Ranch Supporting Equipment',
      description: 'Empowering modern marine agriculture with technology for sustainable development.',
    },
    {
      icon: Bot,
      title: 'Underwater Robot Matrix',
      description: 'Deploying autonomous robots for long-term monitoring and high-precision underwater tasks.',
    },
  ];

  return (
    <AnimatedSection id="future" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Exploring the Boundless</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are actively laying out in four cutting-edge fields to expand the technological frontier.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {layouts.map((layout) => (
            <div key={layout.title} className="bg-card p-8 rounded-xl border border-border flex items-start gap-6">
              <div className="bg-secondary p-4 rounded-lg mt-1">
                <layout.icon className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{layout.title}</h3>
                <p className="mt-2 text-muted-foreground">{layout.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FutureLayout;
