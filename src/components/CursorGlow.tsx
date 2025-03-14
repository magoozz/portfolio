"use client";

import React, { useState, useEffect } from "react";

const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default CursorGlow;
