import React from "react";
import { aboutContent } from "../const/const";

const About = () => {
  return (
    <section id="about" className="bg-[var(--color-background)] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Who we are
          </p>
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            {aboutContent.title}
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted">
            Inspiring young hearts with the light of the Qur'an through a structured, nurturing
            program.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-[28px] border border-[var(--color-primary-soft)] bg-[var(--color-background)] p-8 shadow-[0_18px_45px_var(--color-primary-shadow)]">
            <div className="space-y-4 text-[var(--color-text)]">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--color-gold-soft)] bg-[var(--color-background)] p-8 shadow-[0_18px_45px_var(--color-gold-soft)]">
            <h3 className="text-2xl font-semibold text-primary">
              {aboutContent.atGlanceTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {aboutContent.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--color-text)]">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
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
