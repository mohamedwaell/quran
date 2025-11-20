import React from "react";
import { Link } from "react-router-dom";
import { tuitionOptions, tuitionNotes, scheduleSummary } from "../const/const";

const Tuition = () => {
  return (
    <section
      id="tuition"
      className="bg-[var(--color-background)] py-8 sm:py-10 text-primary"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Tuition & Pricing
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Affordable Learning Plans
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted">
            Transparent pricing with flexible options to fit your family's needs
            and schedule.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-2">
          {tuitionOptions.map(({ classType, rate, details }) => (
            <div
              key={classType}
              className="rounded-[28px] border border-[var(--color-primary-soft)] bg-[var(--color-background-light)] p-6 shadow-[0_20px_40px_var(--color-primary-shadow)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-button-text)]">
                {classType}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-3xl font-semibold text-[var(--color-button-text)]">{rate}</p>
              </div>
              <p className="mt-3 text-sm text-[var(--color-green-light)]">{details}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[32px] border border-[var(--color-primary-soft)] bg-[var(--color-background-light)] p-6 shadow-[0_20px_45px_var(--color-primary-shadow)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-button-text)]">
            Additional Information
          </p>
          <p className="mt-4 text-base text-[var(--color-green-light)]">{tuitionNotes}</p>
        </div>

        <div className="mt-10 rounded-[32px] border border-[var(--color-primary-soft)] bg-[var(--color-background-light)] p-6 shadow-[0_20px_45px_var(--color-primary-shadow)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-button-text)]">
            Schedule Flexibility
          </p>
          <p className="mt-4 text-base text-[var(--color-green-light)]">{scheduleSummary}</p>
        </div>

        {/* <div className="mt-10 rounded-[32px] border border-[var(--color-primary-soft)] bg-[var(--color-background-light)] p-6 text-center shadow-[0_20px_45px_var(--color-primary-shadow)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Ready to Get Started?
          </p>
          <p className="mt-3 text-muted">
            Contact us to discuss which plan works best for your child and to
            schedule a free 15-minute assessment.
          </p> */}
          {/* <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--color-primary)]/30 px-6 py-3 text-sm font-semibold text-primary hover:border-[var(--color-primary)]"
          >
            Contact Us for Enrollment ↗
          </Link> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Tuition;

