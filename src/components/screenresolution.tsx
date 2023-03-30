import React, { useState, useEffect } from "react";

const ScreenResolution = () => {
  const [resolution, setResolution] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateResolution = () => {
      setResolution({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set the initial resolution
    updateResolution();

    // Update the resolution when the window is resized
    window.addEventListener("resize", updateResolution);

    return () => {
      window.removeEventListener("resize", updateResolution);
    };
  }, []);

  return (
    <div className="test__header">
      Current screen resolution: {resolution.width} x {resolution.height}
    </div>
  );
};

export default ScreenResolution;
