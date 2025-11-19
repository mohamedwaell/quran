import React from "react";
import { Link } from "react-router-dom";
import {
  heroContent,
  siteMeta,
  sectionEntrances,
} from "../const/const";

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#F0FBF6] via-white to-[#FDF7E8] py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-10 h-64 w-64 rounded-full bg-[#0A8A56]/10 blur-[120px]" />
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#D4A44A]/20 blur-[150px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:px-0">
        <div className="w-full lg:w-1/2">
          <div
            className="relative overflow-hidden rounded-[30px] border border-[#0A8A56]/20 bg-white p-6 shadow-[0_30px_70px_rgba(10,138,86,0.12)] sm:rounded-[40px]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(10,138,86,0.08), transparent 45%), radial-gradient(circle at 80% 0%, rgba(212,164,74,0.15), transparent 60%)",
            }}
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-light.png')" }} />
            <img
              src={heroContent.heroImage || "/hero.png"}
              alt="Students learning"
              className="relative mx-auto h-[260px] w-full max-w-[320px] object-contain sm:h-[360px] sm:max-w-[420px] lg:h-[420px] lg:max-w-[460px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full space-y-8 lg:w-1/2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0A8A56] shadow-md shadow-[#0A8A56]/10">
            <span className="h-2 w-2 rounded-full bg-[#D4A44A]" />
            {siteMeta.heroBadge}
          </span>
          <div className="space-y-4 text-[#0A2F1D]">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {heroContent.headline}
            </h1>
            <p className="text-base text-[#4F5B51] sm:text-lg">
              {heroContent.subheading}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              to={heroContent.primaryCta.href}
              className="inline-flex min-w-[150px] flex-1 items-center justify-center rounded-2xl bg-[#0A8A56] px-6 py-3 font-semibold text-white shadow-lg shadow-[#0A8A56]/30"
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              to={heroContent.secondaryCta.href}
              className="inline-flex min-w-[150px] flex-1 items-center justify-center rounded-2xl border border-[#0A8A56]/30 px-6 py-3 font-semibold text-[#0A8A56] hover:border-[#0A8A56]"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>

          {/* <div className="grid gap-4 sm:grid-cols-2">
            {heroContent.quickContacts.map(({ label, display, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-[#D4A44A]/30 bg-white/80 p-5 text-[#0A2F1D] shadow-[0_15px_35px_rgba(212,164,74,0.15)] transition hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4A44A]">
                  {label}
                </p>
                <p className="mt-2 text-xl font-semibold text-[#0A8A56]">{display}</p>
              </a>
            ))}
          </div> */}

          {/* <div className="rounded-[24px] border border-white bg-white/90 p-6 shadow-[0_18px_45px_rgba(26,26,26,0.08)] sm:rounded-[28px]">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#0A8A56]">
              <span className="h-2 w-10 rounded-full bg-gradient-to-r from-[#0A8A56] to-[#D4A44A]" />
              Why Parents Choose Us
            </div>
            <ul className="mt-5 space-y-3">
              {heroContent.whyParentsChooseUs.map((item) => (
                <li key={item} className="flex gap-3 text-[#1A1A1A]">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#0A8A56]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl space-y-12 px-4 sm:px-6 lg:px-0">
        {sectionEntrances.map((section, index) => (
          <section
            key={section.id}
            className={`flex min-h-[60vh] flex-col items-center gap-10 rounded-[36px] border border-[#0A8A56]/15 bg-white/95 p-6 text-[#0A2F1D] shadow-[0_30px_70px_rgba(10,138,86,0.12)] transition sm:p-10 ${section.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <div className="w-full p-4 md:w-1/2">
              <img
                src={section.image || heroContent.heroImage}
                alt={section.title}
                className={`w-full rounded-[32px]  `}
                loading="lazy"
              />
            </div>
            <div className="flex w-full flex-col items-center gap-4 p-4 text-center md:w-1/2 md:items-start md:text-left">
              <div className="flex gap-3 text-3xl text-[#0A8A56]">
                <span>{section.icon || "✨"}</span>
                <span>🕌</span>
                <span>🌙</span>
              </div>
              <h3 className="text-3xl font-semibold md:text-4xl">
                {section.title}
              </h3>
              <p className="text-base text-[#4F5B51] md:text-lg">
                {section.description}
              </p>
              <Link
                to={section.path}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-[#0A8A56]/30 px-8 py-3 font-semibold text-[#0A8A56] shadow-lg shadow-[#0A8A56]/10 transition hover:scale-105 hover:border-[#0A8A56]"
              >
                Discover More
              </Link>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Home;