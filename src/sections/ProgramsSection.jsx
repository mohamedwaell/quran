import React from "react";


import {
  programs,
  islamicStudiesTopics,

} from "../const/const";

const ProgramsSection = () => {
  return (
    <section
      id="programs"
      className="bg-[var(--color-background)] py-8 sm:py-10 text-primary px-4  sm:px-6 lg:px-0 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Programs
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Tailored Learning Paths
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted">
            From Nooraniyah fundamentals to complete memorization plans—each
            pathway is structured, warm, and guided by experienced teachers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2">
          {" "}
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-[28px] border border-[var(--color-primary-soft)] bg-[var(--color-background-light)] p-6 shadow-[0_20px_40px_var(--color-primary-shadow)]"
            >
              {" "}
              <h3 className="mt-4 text-2xl text-[var(--color-button-text)] font-semibold">
                {program.title}
              </h3>{" "}
              <p className="mt-3 text-[var(--color-green-light)]">
                {program.description}
              </p>{" "}
              
            </div>
          ))}{" "}
        </div>

        <div className="mt-12">
          <div className="rounded-[32px] border border-[var(--color-primary-soft)] bg-[var(--color-background-light)] p-6 shadow-[0_20px_45px_var(--color-primary-shadow)]">
            
            <h3 className="mt-2 text-2xl font-semibold text-[var(--color-button-text)]">
            Islamic Studies
            </h3>
            <p className="mt-2 text-[var(--color-green-light)]">
              Weekly lessons in Aqeedah, Seerah, daily duas, and prophetic
              manners to anchor every learner spiritually.
            </p>
            <div className=" mt-4 gap-3 ">
              {islamicStudiesTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl  bg-[var(--color-cream)] px-4 py-2 text-sm font-semibold text-[var(--color-button-text)] flex items-center gap-2"
                >
                  <img src="/check.webp" className="w-5 h-5" /> {topic}
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ProgramsSection;
