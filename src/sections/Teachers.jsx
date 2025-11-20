import React from "react";
import { teachers } from "../const/const";

const Teachers = () => {
  return (
    <section id="teachers" className="bg-[var(--color-background)]py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Teachers
          </p>
          <h2 className="text-3xl font-semibold text-primary md:text-4xl">
            Meet Our Instructors
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted">
            Certified Qur’an teachers with ijazah, international experience, and a heart for nurturing
            young learners.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          {teachers.map((teacher) => (
            <article
              key={teacher.name}
              className="rounded-[28px] border border-[var(--color-primary-soft)] bg-[var(--color-background)] p-6 shadow-[0_18px_45px_var(--color-primary-shadow)]"
            >
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src={teacher.photo || "/hero.png"}
                  alt={teacher.name}
                  className="h-20 w-20 rounded-3xl border border-[var(--color-primary-soft)] object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-primary">
                    {teacher.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    {teacher.role}
                  </p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-gold-soft)] px-4 py-1 text-sm text-muted">
                <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
                {teacher.location}
              </div>
              <p className="mt-4 text-[var(--color-text)]">{teacher.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
