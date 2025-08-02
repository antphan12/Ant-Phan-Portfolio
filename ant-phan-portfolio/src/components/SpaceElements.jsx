import { motion } from 'framer-motion';
import './SpaceElements.css';

// Animated stars background component
export const AnimatedStars = () => {
  return (
    <div className="stars-container">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="star"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random(),
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [null, Math.random(), null],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Floating planets component
export const FloatingPlanets = () => {
  const planets = ['🪐', '🌍', '🌙', '☄️', '✨'];
  
  return (
    <div className="planets-container">
      {planets.map((planet, i) => (
        <motion.div
          key={i}
          className={`planet planet-${i}`}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {planet}
        </motion.div>
      ))}
    </div>
  );
};

// Cosmic particle effect
export const CosmicParticles = () => {
  return (
    <div className="particles-container">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: -50,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Glowing orb component
export const GlowingOrb = ({ size = "small", color = "blue", className = "" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-16 h-16",
  };

  const colorClasses = {
    blue: "bg-blue-400",
    purple: "bg-purple-400",
    pink: "bg-pink-400",
    yellow: "bg-yellow-400",
  };

  return (
    <motion.div
      className={`glowing-orb ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Space gradient background
export const SpaceGradient = ({ children, className = "" }) => {
  return (
    <div className={`space-gradient ${className}`}>
      {children}
    </div>
  );
};

// Nebula effect
export const NebulaEffect = () => {
  return (
    <div className="nebula-container">
      <motion.div
        className="nebula nebula-1"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="nebula nebula-2"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
