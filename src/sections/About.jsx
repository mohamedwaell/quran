import React from "react";
import { aboutContent } from "../const/const";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0A8A56]">
            Who we are
          </p>
          <h2 className="text-3xl font-semibold text-[#0A2F1D] md:text-4xl">
            {aboutContent.title}
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#4F5B51]">
            Inspiring young hearts with the light of the Qur'an through a structured, nurturing
            program.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-[28px] border border-[#0A8A56]/10 bg-white/90 p-8 shadow-[0_18px_45px_rgba(26,26,26,0.08)]">
            <div className="space-y-4 text-[#1A1A1A]">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#D4A44A]/30 bg-gradient-to-br from-white to-[#FFF8EB] p-8 shadow-[0_18px_45px_rgba(212,164,74,0.16)]">
            <h3 className="text-2xl font-semibold text-[#0A2F1D]">
              {aboutContent.atGlanceTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {aboutContent.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#1A1A1A]">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D4A44A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
