import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import thobeImg from "@assets/‏لقطة_الشاشة_١٤٤٧-٠٩-٢٢_في_٤.٥١.٣٧_ص_1773195228528.png";
import saudiEmblemImg from "@assets/Parnm8uJs1k1D6kzWwBXEAYAk_1773194796687.png";

const DiriyahPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="diriyah" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <polygon points="60,8 112,100 8,100" fill="none" stroke="#c9a84c" strokeWidth="0.8"/>
        <polygon points="60,22 98,90 22,90" fill="none" stroke="#c9a84c" strokeWidth="0.5"/>
        <polygon points="60,36 85,80 35,80" fill="none" stroke="#7b52ab" strokeWidth="0.4"/>
        <line x1="60" y1="8" x2="60" y2="0" stroke="#c9a84c" strokeWidth="0.6"/>
        <line x1="0" y1="60" x2="120" y2="60" stroke="#7b52ab" strokeWidth="0.3" strokeDasharray="3,8"/>
        <circle cx="60" cy="60" r="3" fill="#c9a84c" opacity="0.4"/>
        <circle cx="20" cy="20" r="1.5" fill="#7b52ab" opacity="0.5"/>
        <circle cx="100" cy="20" r="1.5" fill="#7b52ab" opacity="0.5"/>
        <circle cx="20" cy="100" r="1.5" fill="#7b52ab" opacity="0.5"/>
        <circle cx="100" cy="100" r="1.5" fill="#7b52ab" opacity="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#diriyah)"/>
  </svg>
);

const NajdiArchPattern = () => (
  <svg className="absolute bottom-0 left-0 right-0 w-full opacity-[0.10] pointer-events-none" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,180 L60,140 L120,160 L180,100 L240,140 L300,80 L360,120 L420,60 L480,100 L540,50 L600,90 L660,40 L720,80 L780,40 L840,90 L900,50 L960,100 L1020,60 L1080,120 L1140,80 L1200,140 L1260,100 L1320,160 L1380,140 L1440,180 L1440,200 L0,200Z" fill="#c9a84c"/>
    <path d="M0,190 L80,160 L160,175 L240,130 L320,155 L400,110 L480,140 L560,95 L640,125 L720,85 L800,125 L880,95 L960,140 L1040,110 L1120,155 L1200,130 L1280,175 L1360,160 L1440,190 L1440,200 L0,200Z" fill="#7b52ab" opacity="0.5"/>
  </svg>
);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const springY = useSpring(yBg, { stiffness: 100, damping: 30 });

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen overflow-hidden flex items-center" data-testid="hero-section">
      <motion.div
        style={{ y: springY, scale }}
        className="absolute inset-0 bg-hero-gradient"
      />

      <DiriyahPattern />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${100 + i * 70}px`,
              height: `${100 + i * 70}px`,
              left: `${[8, 78, 12, 70, 4][i]}%`,
              top: `${[18, 8, 72, 78, 42][i]}%`,
              background: i % 2 === 0
                ? "radial-gradient(circle, rgba(123,82,171,0.10) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
            }}
            animate={{ y: [0, -18, 0], x: [0, 8, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-cinzel text-xs md:text-sm tracking-[0.4em] text-lavender-gold/70 mb-5 uppercase"
              data-testid="hero-tagline-top"
            >
              Est. Kingdom of Saudi Arabia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-cinzel font-bold text-5xl md:text-7xl lg:text-7xl xl:text-8xl text-cream leading-none mb-4"
              data-testid="hero-title"
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #f5f0e8 0%, #c9a84c 40%, #f5f0e8 60%, #a07fd0 100%)",
                  backgroundSize: "300% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "text-shimmer 4s linear infinite",
                }}
              >
                NASEEGER
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-amiri text-3xl md:text-4xl text-lavender-pale mb-6"
              data-testid="hero-arabic-name"
            >
              نَسِيجَر
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="font-cormorant text-lg md:text-xl text-cream/55 mb-3 italic"
              data-testid="hero-subtitle"
            >
              Lavender Thobe House
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-montserrat text-sm text-cream/40 max-w-md mb-10 leading-relaxed"
              data-testid="hero-description"
            >
              Where the heritage of Ad-Diriyah meets the elegance of contemporary Saudi fashion.
              Crafted for those who wear their roots with pride.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(123,82,171,0.45)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#collections")?.scrollIntoView({ behavior: "smooth" })}
                className="relative px-10 py-4 bg-lavender-deep text-cream font-montserrat text-xs font-semibold tracking-widest uppercase overflow-hidden group"
                style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
                data-testid="hero-btn-explore"
              >
                <span className="relative z-10">Explore Collection</span>
                <motion.div
                  className="absolute inset-0 bg-lavender/80"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#heritage")?.scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-4 border border-lavender-gold/40 text-lavender-gold font-montserrat text-xs font-medium tracking-widest uppercase hover:border-lavender-gold hover:text-lavender-gold transition-all duration-300"
                style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
                data-testid="hero-btn-heritage"
              >
                Our Heritage
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0 order-1 lg:order-2"
            data-testid="hero-logo"
          >
            <div className="relative">
              <motion.div
                animate={{ boxShadow: [
                  "0 0 60px rgba(123,82,171,0.25), 0 0 120px rgba(123,82,171,0.08)",
                  "0 0 100px rgba(123,82,171,0.5), 0 0 200px rgba(123,82,171,0.2)",
                  "0 0 60px rgba(123,82,171,0.25), 0 0 120px rgba(123,82,171,0.08)",
                ] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-sm pointer-events-none z-10"
              />

              <motion.img
                src={thobeImg}
                alt="NASEEGER Premium Thobe"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 h-80 md:w-80 md:h-[420px] lg:w-[340px] lg:h-[460px] object-cover"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                  filter: "brightness(0.92) contrast(1.06) saturate(0.95)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 60%, rgba(9,12,10,0.7) 100%)",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                }}
              />

              <div
                className="absolute bottom-6 left-0 right-0 text-center"
                style={{ zIndex: 2 }}
              >
                <div className="font-montserrat text-[9px] text-cream/40 tracking-[0.35em] uppercase">
                  Handcrafted · Diriyah Quarter · Riyadh
                </div>
              </div>

              <motion.img
                src={saudiEmblemImg}
                alt="Saudi Arabia"
                className="absolute -top-5 -right-5 w-14 h-14 object-contain opacity-20 pointer-events-none"
                style={{ mixBlendMode: "screen", filter: "brightness(2)" }}
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-montserrat text-[10px] text-cream/25 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-lavender-gold/50 to-transparent" />
      </motion.div>

      <NajdiArchPattern />
    </section>
  );
}
