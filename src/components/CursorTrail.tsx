
import { useState, useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef<number>();
  const trailLength = 12;
  let idCounter = 0;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: idCounter++
      };

      setTrail(prevTrail => {
        const newTrail = [newPoint, ...prevTrail];
        return newTrail.slice(0, trailLength);
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Check for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    
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
      {trail.map((point, index) => (
        <div
          key={point.id}
          className={`absolute w-3 h-3 rounded-full transition-all duration-300 ${
            isHovering 
              ? 'bg-gradient-to-r from-pink-400 to-purple-400 shadow-lg shadow-pink-500/50' 
              : 'bg-gradient-to-r from-pink-500 to-purple-600 shadow-md shadow-purple-500/30'
          }`}
          style={{
            left: point.x - 6,
            top: point.y - 6,
            opacity: Math.max(0, 1 - (index / trailLength) * 0.8),
            transform: `scale(${Math.max(0.2, 1 - (index / trailLength) * 0.6)})`,
            filter: `blur(${index * 0.3}px)`,
            transitionDelay: `${index * 20}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
