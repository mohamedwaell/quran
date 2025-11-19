import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-[var(--color-background)] flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center py-16 sm:py-20">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          404
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-primary">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-xl text-muted">
          The page you're looking for doesn't exist. Choose a section below to
          continue exploring Al-Kareem Academy.
        </p>
      </div>
      <Link
        to="/"
        className="rounded-full bg-primary px-6 py-3 text-white shadow-lg shadow-[var(--color-primary-shadow)]"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;

