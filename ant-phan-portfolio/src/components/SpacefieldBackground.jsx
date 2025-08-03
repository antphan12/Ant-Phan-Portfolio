import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './SpacefieldBackground.css';

const SpacefieldBackground = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate stars with different sizes and speeds
  const generateStars = (count, className, speed = 1) => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 3 + 1;
      const initialX = Math.random() * dimensions.width;
      const initialY = Math.random() * dimensions.height;
      const opacity = Math.random() * 0.8 + 0.2;
      
      return (
        <motion.div
          key={`${className}-${i}`}
          className={`star ${className}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${initialX}px`,
            opacity: opacity,
          }}
          initial={{ y: initialY }}
          animate={{ 
            y: [initialY, initialY - dimensions.height - 100],
            opacity: [opacity, opacity * 0.5, opacity]
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
        />
      );
    });
  };

  // Generate larger cosmic objects
  const generateCosmicObjects = () => {
    const objects = ['✨', '💫', '⭐', '🌟', '☄️'];
    
    return Array.from({ length: 8 }, (_, i) => {
      const object = objects[Math.floor(Math.random() * objects.length)];
      const initialX = Math.random() * dimensions.width;
      const initialY = Math.random() * dimensions.height;
      const size = Math.random() * 20 + 15;
      
      return (
        <motion.div
          key={`cosmic-${i}`}
          className="cosmic-object"
          style={{
            left: `${initialX}px`,
            fontSize: `${size}px`,
          }}
          initial={{ y: initialY }}
          animate={{ 
            y: [initialY, initialY - dimensions.height - 100],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
        >
          {object}
        </motion.div>
      );
    });
  };

  // Generate floating nebula clouds
  const generateNebulas = () => {
    return Array.from({ length: 3 }, (_, i) => {
      const colors = [
        'rgba(96, 165, 250, 0.1)',
        'rgba(168, 139, 250, 0.1)',
        'rgba(244, 114, 182, 0.1)'
      ];
      
      return (
        <motion.div
          key={`nebula-${i}`}
          className="nebula-cloud"
          style={{
            background: `radial-gradient(circle, ${colors[i]} 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      );
    });
  };

  return (
    <div className="spacefield-background">
      {/* Background gradient */}
      <div className="space-gradient-bg" />
      
      {/* Nebula clouds */}
      <div className="nebulas-layer">
        {generateNebulas()}
      </div>
      
      {/* Multiple star layers for depth */}
      <div className="stars-layer stars-far">
        {generateStars(100, 'star-far')}
      </div>
      
      <div className="stars-layer stars-medium">
        {generateStars(60, 'star-medium')}
      </div>
      
      <div className="stars-layer stars-close">
        {generateStars(30, 'star-close')}
      </div>
      
      {/* Cosmic objects */}
      <div className="cosmic-layer">
        {generateCosmicObjects()}
      </div>
      
      {/* Shooting stars */}
      <div className="shooting-stars">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="shooting-star"
            initial={{ 
              x: -50, 
              y: Math.random() * dimensions.height * 0.7,
              opacity: 0
            }}
            animate={{ 
              x: dimensions.width + 50,
              y: Math.random() * dimensions.height * 0.7 + 100,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 10 + 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      {/* Twinkling effect overlay */}
      <motion.div 
        className="twinkle-overlay"
        animate={{
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default SpacefieldBackground;
