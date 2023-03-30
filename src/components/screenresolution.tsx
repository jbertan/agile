import React, { useState, useEffect } from "react";

const ScreenResolution = () => {
  const [resolution, setResolution] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateResolution = () => {
      setResolution({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", updateResolution);

    return () => {
      window.removeEventListener("resize", updateResolution);
    };
  }, []);

  return (
    <div className="header">
      Current screen resolution: {resolution.width} x {resolution.height}
    </div>
  );
};

export default ScreenResolution;
