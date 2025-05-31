// src/components/CursorCometTrail.tsx
import { useState, useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  dx: number;
  dy: number;
}

const CursorCometTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const trailLength = 20;
  const idRef = useRef(0);
  const prevPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;

    const handleMove = (e: MouseEvent) => {
      const dx = prevPos.current ? e.clientX - prevPos.current.x : 0;
      const dy = prevPos.current ? e.clientY - prevPos.current.y : 0;
      prevPos.current = { x: e.clientX, y: e.clientY };

      const point: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        dx,
        dy,
        id: idRef.current++,
      };

      setTrail(prev => [point, ...prev.slice(0, trailLength - 1)]);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {trail.map((point, index) => {
        const progress = index / trailLength;
        const isHead = index === 0;
        const size = isHead ? 34 : 28 - progress * 22;
        const opacity = isHead ? 0.95 : 0.4 - progress * 0.35;
        const blur = isHead ? 16 : 6 + progress * 8;
        const angle = Math.atan2(point.dy, point.dx) * (180 / Math.PI);
        const rotate = `rotate(${angle}deg)`;

        const headGlow = isHead
          ? `0 0 40px rgba(255,255,255,0.9), 0 0 80px rgba(120,200,255,0.6)`
          : `0 0 ${size}px rgba(200,220,255,0.2)`;

        const background = isHead
          ? `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(180,220,255,0.6) 50%, transparent 80%)`
          : `linear-gradient(90deg, rgba(255,255,255,${opacity}) 0%, rgba(120,200,255,0) 100%)`;

        return (
          <div
            key={point.id}
            className="absolute"
            style={{
              left: `${point.x - size / 2}px`,
              top: `${point.y - size / 2}px`,
              width: `${size}px`,
              height: `${size * 0.5}px`,
              background,
              borderRadius: '50%',
              opacity,
              filter: `blur(${blur}px)`,
              boxShadow: headGlow,
              transform: rotate,
              transition: 'all 40ms ease-out',
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorCometTrail;
