import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems, siteMeta } from "../const/const";

const Navbar = () => {
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isMenuOpen) return;
      const target = event.target;
      const clickedInsideMenu =
        menuRef.current && menuRef.current.contains(target);
      const clickedToggle =
        toggleButtonRef.current && toggleButtonRef.current.contains(target);
      if (!clickedInsideMenu && !clickedToggle) {
        setIsMenuOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1A1A1A]/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:gap-6 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={ "/logo.webp"}
            alt="Al-Kareem Academy"
            className="h-12 w-12 rounded-2xl border border-[#0A8A56]/20 bg-white object-contain p-1 shadow-lg shadow-[#0A8A56]/20"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0A8A56]">
              {siteMeta?.title?.split(" — ")[0] || "Al-Kareem Academy"}
            </p>
            <p className="text-sm text-[#4F5B51]">{siteMeta.tagline}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-semibold text-[#1A1A1A] md:flex">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className={`transition-colors hover:text-[#0A8A56] ${
                location.pathname === href ? "text-[#0A8A56]" : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-[#0A8A56] px-5 py-2 text-white shadow-lg shadow-[#0A8A56]/30"
          >
            Contact Us
          </Link>
        </div>

        <button
          ref={toggleButtonRef}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="text-2xl text-[#0A8A56] md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="flex flex-col gap-4 border-t border-[#1A1A1A]/10 bg-white/95 px-4 py-4 text-sm font-semibold text-[#1A1A1A] md:hidden"
        >
          {navItems.map(({ label, href }) => (
            <Link
              key={`${label}-mobile`}
              to={href}
              className="rounded-xl px-3 py-2 hover:bg-[#0A8A56]/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-[#0A8A56] px-4 py-2 text-center text-white shadow-md shadow-[#0A8A56]/30"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
