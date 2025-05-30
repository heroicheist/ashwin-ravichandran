
import { useState, useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef<number>();
  const trailLength = 20;
  let idCounter = 0;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: idCounter++,
        timestamp: Date.now()
      };

      setTrail(prevTrail => {
        const newTrail = [newPoint, ...prevTrail];
        return newTrail.slice(0, trailLength);
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Check for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => {
        const progress = index / trailLength;
        const size = Math.max(2, 16 * (1 - progress * 0.9));
        const opacity = Math.max(0, 1 - progress * 1.2);
        const blur = progress * 1.5;
        
        return (
          <div
            key={point.id}
            className={`absolute rounded-full transition-all duration-100 ${
              isHovering 
                ? 'bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 shadow-lg' 
                : 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 shadow-md'
            }`}
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              filter: `blur(${blur}px)`,
              boxShadow: isHovering 
                ? `0 0 ${size * 2}px rgba(236, 72, 153, 0.6), 0 0 ${size * 4}px rgba(147, 51, 234, 0.3)`
                : `0 0 ${size * 1.5}px rgba(168, 85, 247, 0.5), 0 0 ${size * 3}px rgba(99, 102, 241, 0.2)`,
              transitionDelay: `${index * 10}ms`,
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;
