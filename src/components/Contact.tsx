import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const contactDetails = [
    { icon: Mail, label: 'Email', value: 'chensy540@protonmail.com', href: 'mailto:chensy540@protonmail.com' },
    { icon: Phone, label: 'Phone', value: '+86 13672789365', href: 'tel:+8613672789365' },
    { icon: MapPin, label: 'Address', value: 'Room 701, Building 9, Huajin Zhihuiwan Innovation Center, Dingxing Road, High-tech Zone, Zhuhai City, Guangdong Province' },
    { icon: Globe, label: 'Website', value: 'www.maxeye.com', href: 'http://www.maxeye.com' },
  ];

  return (
    <AnimatedSection id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We look forward to working with you to create a brilliant future.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-card border border-border p-3 rounded-lg">
                <detail.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{detail.label}</h3>
                {detail.href ? (
                  <a href={detail.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
