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
      className="bg-[var(--color-background)] py-16 sm:py-20 text-primary"
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
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-[28px] border border-[var(--color-primary-soft)] bg-[var(--color-background)] p-6 shadow-[0_20px_40px_var(--color-primary-shadow)]"
            >
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-base">
                  📘
                </span>
                Core Track
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{program.title}</h3>
              <p className="mt-3 text-muted">{program.description}</p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 px-5 py-2 text-sm font-semibold text-primary transition hover:border-[var(--color-primary)]">
                View outline →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-[32px] border border-[var(--color-primary-soft)] bg-[var(--color-background)] p-6 shadow-[0_20px_45px_var(--color-primary-shadow)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Islamic Studies
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-primary">
              Faith & Character Curriculum
            </h3>
            <p className="mt-2 text-muted">
              Weekly lessons in Aqeedah, Seerah, daily duas, and prophetic
              manners to anchor every learner spiritually.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {islamicStudiesTopics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-2xl border border-[var(--color-primary-soft)] bg-[var(--color-cream)] p-4 text-sm font-semibold text-[var(--color-text)]"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--color-primary-soft)] bg-[var(--color-background)] p-6 shadow-[0_20px_45px_var(--color-primary-shadow)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Tuition Plans
            </p>
            <div className="mt-4 grid gap-3">
              {tuitionOptions.map(({ classType, rate, details }) => (
                <div
                  key={classType}
                  className="rounded-2xl border border-[var(--color-primary-soft)] bg-[var(--color-cream)] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {classType}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-2xl font-semibold text-primary">
                      {rate}
                    </p>
                    <span className="text-sm text-muted">{details}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl bg-[var(--color-cream)] p-4 text-sm text-muted">
              {tuitionNotes}
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[32px] border border-[var(--color-primary-soft)] bg-[var(--color-background)] p-6 text-center shadow-[0_20px_45px_var(--color-primary-shadow)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Parent Snapshot
          </p>
          <p className="mt-3 text-muted">
            Weekly progress briefs, optional in-person check-ins (DMV area), and
            1:1 reviews keep every family connected to the learning journey.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--color-primary)]/30 px-6 py-3 text-sm font-semibold text-primary hover:border-[var(--color-primary)]"
          >
            Schedule a consultation ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

