import React from "react";
import {
  programs,
  islamicStudiesTopics,
  scheduleSummary,
  tuitionOptions,
  tuitionNotes,
} from "../const/const";

const ProgramsSection = () => {
  return (
    <section
      id="programs"
      className="bg-gradient-to-b from-[#F5FFF5] via-white to-[#F5FFF5] py-16 sm:py-20 text-[#0A2F1D]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0A8A56]">
            Programs
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Tailored Learning Paths
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#4F5B51]">
            From Nooraniyah fundamentals to complete memorization plans—each
            pathway is structured, warm, and guided by experienced teachers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-[28px] border border-[#0A8A56]/15 bg-white/95 p-6 shadow-[0_20px_40px_rgba(10,138,86,0.08)]"
            >
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0A8A56]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0A8A56]/10 text-base">
                  📘
                </span>
                Core Track
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{program.title}</h3>
              <p className="mt-3 text-[#4F5B51]">{program.description}</p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#0A8A56]/30 px-5 py-2 text-sm font-semibold text-[#0A8A56] transition hover:border-[#0A8A56]">
                View outline →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-[32px] border border-[#0A8A56]/20 bg-white/95 p-6 shadow-[0_20px_45px_rgba(10,138,86,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4A44A]">
              Islamic Studies
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[#0A2F1D]">
              Faith & Character Curriculum
            </h3>
            <p className="mt-2 text-[#4F5B51]">
              Weekly lessons in Aqeedah, Seerah, daily duas, and prophetic
              manners to anchor every learner spiritually.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {islamicStudiesTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-[#0A8A56]/15 bg-[#F7F9F7] p-4 text-sm font-semibold text-[#1A1A1A]"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#0A8A56]/20 bg-white/95 p-6 shadow-[0_20px_45px_rgba(10,138,86,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0A8A56]">
              Tuition Plans
            </p>
            <div className="mt-4 grid gap-3">
              {tuitionOptions.map(({ classType, rate, details }) => (
                <div
                  key={classType}
                  className="rounded-2xl border border-[#0A8A56]/15 bg-[#F7F9F7] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0A8A56]">
                    {classType}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-2xl font-semibold text-[#0A2F1D]">
                      {rate}
                    </p>
                    <span className="text-sm text-[#4F5B51]">{details}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl bg-[#F7F9F7] p-4 text-sm text-[#4F5B51]">
              {tuitionNotes}
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[32px] border border-[#0A8A56]/15 bg-white p-6 text-center shadow-[0_20px_45px_rgba(10,138,86,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0A8A56]">
            Parent Snapshot
          </p>
          <p className="mt-3 text-[#4F5B51]">
            Weekly progress briefs, optional in-person check-ins (DMV area), and
            1:1 reviews keep every family connected to the learning journey.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-[#0A8A56]/30 px-6 py-3 text-sm font-semibold text-[#0A8A56] hover:border-[#0A8A56]"
          >
            Schedule a consultation ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

