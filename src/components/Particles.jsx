"use client";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const num = parseInt(hex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

export const Particles = ({
  className = "",
  quantity = 100,
  size = 2,
  color = "#ffffff",
  ease = 50,
  staticity = 50,
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const ctx = useRef(null);
  const circles = useRef([]);
  const rafID = useRef(null);
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const mouse = useRef({ x: 0, y: 0 });
  const mouseInitialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    mouse.current.x = containerRef.current.offsetWidth / 2;
    mouse.current.y = containerRef.current.offsetHeight / 2;

    const onMouseMove = (e) => {
      
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const { w, h } = canvasSize.current;
        const x = e.clientX - rect.left - w / 2;
        const y = e.clientY - rect.top - h / 2;
        
        
        const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
        if (inside) {
          mouse.current.x = e.clientX;
          mouse.current.y = e.clientY;
          mouseInitialized.current = true;
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const initCanvas = () => {
    if (!canvasRef.current || !containerRef.current) return;

    ctx.current = canvasRef.current.getContext("2d");

    canvasSize.current.w = containerRef.current.offsetWidth;
    canvasSize.current.h = containerRef.current.offsetHeight;

    canvasRef.current.width = canvasSize.current.w * dpr;
    canvasRef.current.height = canvasSize.current.h * dpr;
    canvasRef.current.style.width = `${canvasSize.current.w}px`;
    canvasRef.current.style.height = `${canvasSize.current.h}px`;

    ctx.current.scale(dpr, dpr);

    
    if (circles.current.length === 0) {
        circles.current = [];
        for (let i = 0; i < quantity; i++) {
            circles.current.push(createCircle());
        }
    }
  };

  const createCircle = () => {
    return {
      x: Math.random() * canvasSize.current.w,
      y: Math.random() * canvasSize.current.h,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * size + 0.5,
      alpha: 0,
      targetAlpha: Math.random() * 0.6 + 0.1,
      translateX: 0,
      translateY: 0,
      magnetism: 0.5 + Math.random() * 2,
    };
  };

  const drawCircle = (c) => {
    if (!ctx.current) return;
    ctx.current.beginPath();
    ctx.current.arc(c.x + c.translateX, c.y + c.translateY, c.size, 0, Math.PI * 2);
    const rgb = hexToRgb(color);
    ctx.current.fillStyle = `rgba(${rgb.join(",")}, ${c.alpha})`;
    ctx.current.fill();
  };

  const animate = () => {
    if (!ctx.current) return;
    
    
    ctx.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);

    circles.current.forEach((c) => {
      
      c.x += c.dx + vx;
      c.y += c.dy + vy;

      
      if (c.x < 0) c.x = canvasSize.current.w; 
      if (c.x > canvasSize.current.w) c.x = 0;
      if (c.y < 0) c.y = canvasSize.current.h;
      if (c.y > canvasSize.current.h) c.y = 0;

      
      
      const mouseX = mouseInitialized.current ? mouse.current.x : canvasSize.current.w / 2;
      const mouseY = mouseInitialized.current ? mouse.current.y : canvasSize.current.h / 2;

      c.translateX +=
        (mouseX - canvasSize.current.w / 2 - c.translateX) /
        (staticity / c.magnetism);
      c.translateY +=
        (mouseY - canvasSize.current.h / 2 - c.translateY) /
        (staticity / c.magnetism);

      
      c.alpha += (c.targetAlpha - c.alpha) * 0.05;

      drawCircle(c);
    });

    rafID.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    initCanvas();
    animate();

    const handleResize = () => {
        
        if(containerRef.current) {
            canvasSize.current.w = containerRef.current.offsetWidth;
            canvasSize.current.h = containerRef.current.offsetHeight;
            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;
            ctx.current.scale(dpr, dpr);
            
            circles.current = [];
            for (let i = 0; i < quantity; i++) {
                circles.current.push(createCircle());
            }
        }
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafID.current) cancelAnimationFrame(rafID.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [color, quantity, ease, staticity]); 

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={twMerge("pointer-events-none absolute inset-0 overflow-hidden", className)}
      {...props}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};