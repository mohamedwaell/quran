import React from "react";
import { teachers } from "../const/const";

const Teachers = () => {
  return (
    <section id="teachers" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0A8A56]">
            Teachers
          </p>
          <h2 className="text-3xl font-semibold text-[#0A2F1D] md:text-4xl">
            Meet Our Instructors
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#4F5B51]">
            Certified Qur’an teachers with ijazah, international experience, and a heart for nurturing
            young learners.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          {teachers.map((teacher) => (
            <article
              key={teacher.name}
              className="rounded-[28px] border border-[#0A8A56]/10 bg-white p-6 shadow-[0_18px_45px_rgba(26,26,26,0.08)]"
            >
              <div className="flex flex-wrap items-center gap-4">
                <img
                  src={teacher.photo || "/hero.png"}
                  alt={teacher.name}
                  className="h-20 w-20 rounded-3xl border border-[#0A8A56]/10 object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-[#0A2F1D]">
                    {teacher.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0A8A56]">
                    {teacher.role}
                  </p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/10 px-4 py-1 text-sm text-[#4F5B51]">
                <span className="h-2 w-2 rounded-full bg-[#D4A44A]" />
                {teacher.location}
              </div>
              <p className="mt-4 text-[#1A1A1A]">{teacher.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
