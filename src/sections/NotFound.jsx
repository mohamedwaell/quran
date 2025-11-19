import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0A8A56]">
          404
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-[#0A2F1D]">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-xl text-[#4F5B51]">
          The page you're looking for doesn't exist. Choose a section below to
          continue exploring Al-Kareem Academy.
        </p>
      </div>
      <Link
        to="/"
        className="rounded-full bg-[#0A8A56] px-6 py-3 text-white shadow-lg shadow-[#0A8A56]/30"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;

