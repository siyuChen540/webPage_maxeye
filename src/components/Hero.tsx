import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.15),rgba(255,255,255,0))]"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground">
          Lingtong Wisdom Technology
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          Driven by technological innovation, we explore, understand and serve the planet we live on.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#business"
            className="bg-accent text-accent-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Explore Our Work
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
