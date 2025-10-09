import React from 'react';
import { Target, Zap, ShieldCheck, Handshake } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  const values = [
    { icon: Target, title: 'Precision', description: 'Unwavering commitment to accuracy and detail.' },
    { icon: Zap, title: 'Innovation', description: 'Constantly pushing the boundaries of technology.' },
    { icon: ShieldCheck, title: 'Reliability', description: 'Delivering robust and dependable solutions.' },
    { icon: Handshake, title: 'Cooperation', description: 'Building strong partnerships for mutual success.' },
  ];

  return (
    <AnimatedSection id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">About Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are a high-tech enterprise dedicated to the application of spatial information technology and the manufacturing of intelligent equipment.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl font-semibold text-accent">Our Vision</h3>
                <p className="mt-2 text-muted-foreground">To become a global leader in spatial information solutions and high-end marine equipment.</p>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-accent">Our Mission</h3>
                <p className="mt-2 text-muted-foreground">Driven by technological innovation, we explore, understand and serve the planet we live on.</p>
            </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold">{value.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
