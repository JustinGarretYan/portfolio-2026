import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  color: string;
  opacity: number;
}

const COLORS = ["#1e3a8a", "#2563eb", "#3b82f6", "#4338ca", "#1d4ed8"];
const BASE_SPEED = 0.3;

export function BackgroundBubbles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<HTMLDivElement[]>([]);
  const blobs = useRef<Blob[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const frame = useRef<number>(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const make = (): Blob => {
      const size = Math.random() * 200 + 420;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size,
        vx: (Math.random() - 0.5) * BASE_SPEED,
        vy: (Math.random() - 0.5) * BASE_SPEED,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: 0.18,
      };
    };

    blobs.current = Array.from({ length: 5 }, make);

    // paint initial styles
    blobs.current.forEach((b, i) => {
      const el = blobRefs.current[i];
      if (!el) return;
      el.style.width = `${b.size}px`;
      el.style.height = `${b.size}px`;
      el.style.background = b.color;
      el.style.opacity = String(b.opacity);
    });

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      blobs.current.forEach((b, i) => {
        b.x += b.vx;
        b.y += b.vy;

        if (mouse.current.active) {
          const cx = b.x + b.size / 2;
          const cy = b.y + b.size / 2;
          const dx = mouse.current.x - cx;
          const dy = mouse.current.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const pull = Math.min(0.002, 40 / (dist * dist));
          b.vx += dx * pull * 0.015;
          b.vy += dy * pull * 0.015;
        }

        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        const maxSpeed = BASE_SPEED * 2;
        if (speed > maxSpeed) {
          b.vx = (b.vx / speed) * maxSpeed;
          b.vy = (b.vy / speed) * maxSpeed;
        }

        if (b.x < -b.size) b.x = w;
        if (b.x > w) b.x = -b.size;
        if (b.y < -b.size) b.y = h;
        if (b.y > h) b.y = -b.size;

        const el = blobRefs.current[i];
        if (el) el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0)`;
      });
      frame.current = requestAnimationFrame(tick);
    };

    if (!reduce) frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) blobRefs.current[i] = el;
          }}
          className="absolute left-0 top-0 rounded-full blur-[90px] will-change-transform"
        />
      ))}
    </div>
  );
}
