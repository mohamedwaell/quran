import { useMediaQuery } from "react-responsive"; // 👈 Import the hook
import { motion } from "framer-motion";
import { heroContent, siteMeta } from "../const/const";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // No need for useEffect, useState, or window checks!

  const initialAnimation = isMobile
    ? { opacity: 0, y: 70 } // Mobile: Fade up from bottom
    : { opacity: 0, x: -70 }; // PC: Fade in from left
  const fanimate = isMobile
    ? { opacity: 1, y: 0, x: 0 }
    : { opacity: 1, y: 0, x: 0 };
  return (
    <section id="hero" className="px-4  sm:px-6 lg:px-0">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:px-0 py-16 ">
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-[30px] border border-[var(--color-primary-soft)] p-6 shadow-[0_30px_70px_var(--color-primary-shadow)] sm:rounded-[40px]">
            <motion.img
              src={heroContent.heroImage || "/hero.png"}
              alt="Students learning"
              className="relative mx-auto h-[260px] w-full max-w-[320px] object-contain sm:h-[360px] sm:max-w-[420px] lg:h-[420px] lg:max-w-[460px] "
             fetchpriority="high"
              initial={initialAnimation}
              animate={fanimate}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            />
          </div>
        </div>

        <div className="w-full space-y-8 lg:w-1/2">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-background)] px-4 py-2 text-xl font-semibold text-primary shadow-lg shadow-orange-300">
            <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
            {siteMeta.heroBadge}
          </span>
          <div className="space-y-4 text-primary">
            <h1 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {heroContent.headline}
            </h1>
            <p className="text-base text-muted sm:text-lg">
              {heroContent.subheading}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex min-w-[150px] flex-1 items-center justify-center rounded-2xl bg-[#d7a83f] px-6 py-3 font-semibold text-white shadow-lg shadow-[var(--color-primary-shadow)]"
            >
              {heroContent.primaryCta.label}
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex min-w-[150px] flex-1 items-center justify-center rounded-2xl border border-[var(--color-primary)]/30 px-6 py-3 font-semibold text-primary hover:border-[var(--color-primary)]"
            >
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
