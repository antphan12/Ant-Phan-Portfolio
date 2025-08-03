import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const shootingStarsRef = useRef([]);

  class Star {
    constructor(canvas) {
      this.canvas = canvas;
      this.reset();
      this.z = Math.random() * 1000; // Start at random depth
    }

    reset() {
      this.x = (Math.random() - 0.5) * 2000;
      this.y = (Math.random() - 0.5) * 2000;
      this.z = 1000;
      this.prevX = this.x / (this.z * 0.001);
      this.prevY = this.y / (this.z * 0.001);
    }

    update(speed) {
      this.prevX = this.x / (this.z * 0.001);
      this.prevY = this.y / (this.z * 0.001);
      
      this.z -= speed;
      
      if (this.z <= 0) {
        this.reset();
      }
    }

    draw(ctx) {
      const x = this.x / (this.z * 0.001);
      const y = this.y / (this.z * 0.001);
      
      const centerX = this.canvas.width / 2;
      const centerY = this.canvas.height / 2;
      
      const screenX = x + centerX;
      const screenY = y + centerY;
      const prevScreenX = this.prevX + centerX;
      const prevScreenY = this.prevY + centerY;
      
      // Only draw if star is on screen
      if (screenX >= 0 && screenX <= this.canvas.width && 
          screenY >= 0 && screenY <= this.canvas.height) {
        
        const size = (1 - this.z / 1000) * 2;
        const opacity = 1 - this.z / 1000;
        
        // Create twinkling effect
        const twinkle = Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.3 + 0.7;
        
        // Color variation based on position
        const hue = (this.x + this.y) * 0.1 % 360;
        const saturation = 20 + Math.sin(this.z * 0.01) * 20;
        
        ctx.globalAlpha = opacity * twinkle;
        
        // Draw star trail for motion effect
        ctx.beginPath();
        ctx.strokeStyle = `hsla(${hue}, ${saturation}%, 80%, ${opacity * 0.6})`;
        ctx.lineWidth = size * 0.5;
        ctx.moveTo(prevScreenX, prevScreenY);
        ctx.lineTo(screenX, screenY);
        ctx.stroke();
        
        // Draw star core
        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, 90%, ${opacity})`;
        ctx.shadowBlur = size * 3;
        ctx.shadowColor = `hsla(${hue}, ${saturation}%, 90%, ${opacity})`;
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }
  }

  class ShootingStar {
    constructor(canvas) {
      this.canvas = canvas;
      this.reset();
    }

    reset() {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height * 0.3; // Top third of screen
      this.length = Math.random() * 80 + 20;
      this.speed = Math.random() * 3 + 2;
      this.angle = Math.random() * Math.PI / 6 + Math.PI / 4; // 45-75 degrees
      this.opacity = 1;
      this.life = 1;
    }

    update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.life -= 0.01;
      this.opacity = this.life;

      if (this.life <= 0 || this.x > this.canvas.width || this.y > this.canvas.height) {
        this.reset();
      }
    }

    draw(ctx) {
      if (this.opacity <= 0) return;

      const gradient = ctx.createLinearGradient(
        this.x, this.y,
        this.x - Math.cos(this.angle) * this.length,
        this.y - Math.sin(this.angle) * this.length
      );
      
      gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
      gradient.addColorStop(0.3, `rgba(135, 206, 250, ${this.opacity * 0.8})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(
        this.x - Math.cos(this.angle) * this.length,
        this.y - Math.sin(this.angle) * this.length
      );
      ctx.stroke();

      // Add bright core
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize stars
    const numStars = 800;
    const numShootingStars = 3;
    
    starsRef.current = Array.from({ length: numStars }, () => new Star(canvas));
    shootingStarsRef.current = Array.from({ length: numShootingStars }, () => new ShootingStar(canvas));

    let speed = 2;

    const animate = () => {
      // Clear canvas with slight trail effect for smooth motion
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      starsRef.current.forEach(star => {
        star.update(speed);
        star.draw(ctx);
      });

      // Update and draw shooting stars
      shootingStarsRef.current.forEach(shootingStar => {
        shootingStar.update();
        shootingStar.draw(ctx);
      });

      // Create occasional burst of faster stars
      if (Math.random() < 0.001) {
        speed = Math.min(speed + 0.5, 8);
      } else {
        speed = Math.max(speed - 0.05, 2);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -10, /* Lower z-index to ensure it stays behind content */
        background: 'radial-gradient(ellipse at center, rgba(15, 15, 30, 1) 0%, rgba(5, 5, 15, 1) 100%)'
      }}
    />
  );
};

export default Starfield;
