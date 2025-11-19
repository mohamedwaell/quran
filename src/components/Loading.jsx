import React, { useEffect, useState } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setVisible(false), 1000); // optional: fully remove after fade
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 z-500 flex h-full w-full items-center justify-center bg-[var(--color-background)] transition-opacity duration-700 ${
        loading
          ? "opacity-100 pointer-events-auto z-50"
          : "opacity-0 pointer-events-none"
      } ${visible ? "" : "hidden"}`}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-[var(--color-text)] border-opacity-70" />
    </div>
  );
};

export default Loading;
