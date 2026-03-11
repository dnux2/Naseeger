import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import fabric1 from "@assets/0f8070e7-5de7-46cd-a15c-507e194ffeac-thumbnail-770x770-70.jpg_1773193733604.avif";
import fabric2 from "@assets/8c476e39-fd37-4712-b181-3216b93b3148_1773193733604.jpg";
import fabric3 from "@assets/77c3e59f-cfdc-4ed7-bf5b-a7983d2b6a09-thumbnail-770x770-70.jpg_1773193744418.avif";
import fabric4 from "@assets/292ae3ee-e0f1-4543-a124-9e073e5fa2db-thumbnail-770x770-70.jpg_1773193744418.avif";
import diriyahBg from "@assets/Gemini_Generated_Image_vh2hfwvh2hfwvh2h_1773195639654.png";

const fabricItems = [
  {
    id: 1,
    src: fabric1,
    name: "Signature Linen Weave",
    nameAr: "نسيج الكتان الإمبراطوري",
    origin: "Egyptian Cotton — Upper Egypt Mills",
    texture: "140s Ultra-fine Thread Count",
    color: "#c9a84c",
  },
  {
    id: 2,
    src: fabric2,
    name: "Midnight Navy Blend",
    nameAr: "مزيج الأزرق الليلي",
    origin: "Italian Wool Blend — Biella, Italy",
    texture: "Premium Worsted Weave",
    color: "#5a7aa8",
  },
  {
    id: 3,
    src: fabric3,
    name: "Royal Lavender Satin",
    nameAr: "ساتان اللافندر الملكي",
    origin: "Hejaz Silk — Al-Madinah Workshops",
    texture: "8-Thread Sateen Finish",
    color: "#9b76cc",
  },
  {
    id: 4,
    src: fabric4,
    name: "Desert Pearl Cotton",
    nameAr: "قطن لؤلؤ الصحراء",
    origin: "Gulf-Certified Organic Cotton",
    texture: "Nano-Fiber Surface Treatment",
    color: "#d4c9a8",
  },
];

const CARD_POSITIONS = [
  { x: 0,   y: 0,  scale: 1,    opacity: 1,    rotateZ: 0,    zIndex: 40 },
  { x: 56,  y: 16, scale: 0.97, opacity: 0.80, rotateZ: 3,    zIndex: 30 },
  { x: 106, y: 30, scale: 0.93, opacity: 0.58, rotateZ: 6,    zIndex: 20 },
  { x: 150, y: 44, scale: 0.89, opacity: 0.38, rotateZ: 9,    zIndex: 10 },
];

function getCardPos(index: number, active: number, total: number) {
  const offset = ((index - active) % total + total) % total;
  if (offset >= CARD_POSITIONS.length) {
    return { ...CARD_POSITIONS[CARD_POSITIONS.length - 1], opacity: 0, zIndex: 0 };
  }
  return CARD_POSITIONS[offset];
}

export default function FabricShowcase() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const total = fabricItems.length;

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const handleDragStart = (e: React.PointerEvent) => {
    setDragging(true);
    setDragStartX(e.clientX);
  };
  const handleDragEnd = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragging(false);
    const dx = dragStartX - e.clientX;
    if (Math.abs(dx) > 40) {
      dx > 0 ? next() : prev();
    }
  };

  const currentFabric = fabricItems[active];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      data-testid="fabric-showcase-section"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <img
          src={diriyahBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.55) saturate(0.85)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(9,12,10,0.25) 0%, rgba(9,12,10,0.10) 35%, rgba(9,12,10,0.55) 75%, rgba(9,12,10,0.95) 100%)",
          }}
        />
      </motion.div>

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect x='30' y='5' width='20' height='20' transform='rotate(45 40 15)' fill='none' stroke='rgba(201,168,76,0.05)' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex flex-col flex-1 pt-24 pb-12 px-6 lg:px-10 max-w-7xl mx-auto w-full"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0"
            style={{ width: "min(580px, 92vw)", height: "460px" }}
            onPointerDown={handleDragStart}
            onPointerUp={handleDragEnd}
            onPointerLeave={() => setDragging(false)}
          >
            {fabricItems.map((fabric, i) => {
              const pos = getCardPos(i, active, total);
              return (
                <motion.div
                  key={fabric.id}
                  onClick={() => i !== active && setActive(i)}
                  animate={{
                    x: pos.x,
                    y: pos.y,
                    scale: pos.scale,
                    opacity: pos.opacity,
                    rotate: pos.rotateZ,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-0 w-[300px] md:w-[340px] cursor-pointer select-none"
                  style={{ zIndex: pos.zIndex, transformOrigin: "top left" }}
                  data-testid={`showcase-card-${fabric.id}`}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{
                      border: i === active ? `1px solid ${fabric.color}70` : "1px solid rgba(201,168,76,0.12)",
                      boxShadow: i === active
                        ? `0 30px 70px -10px rgba(0,0,0,0.9), 0 0 40px ${fabric.color}20, inset 0 1px 0 rgba(255,255,255,0.06)`
                        : "0 15px 40px -10px rgba(0,0,0,0.7)",
                      clipPath: i === active
                        ? "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))"
                        : "none",
                    }}
                  >
                    <img
                      src={fabric.src}
                      alt={fabric.name}
                      draggable={false}
                      className="w-full aspect-[3/4] object-cover"
                      style={{
                        filter: i === active
                          ? "brightness(1.05) saturate(1.1) contrast(1.02)"
                          : "brightness(0.6) saturate(0.7)",
                        transition: "filter 0.5s ease",
                      }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: i === active
                          ? `linear-gradient(to bottom, transparent 55%, rgba(9,12,10,0.75) 100%)`
                          : `linear-gradient(to bottom, transparent 20%, rgba(9,12,10,0.88) 100%)`,
                      }}
                    />
                    {i === active && (
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="w-6 h-px mb-1.5" style={{ background: fabric.color }} />
                        <div className="font-cinzel text-[10px] text-cream/50 tracking-widest uppercase">{fabric.origin}</div>
                      </div>
                    )}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)",
                        opacity: i === active ? 1 : 0,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}

            <div className="absolute bottom-0 left-0 flex gap-2.5" style={{ zIndex: 50 }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-9 h-9 flex items-center justify-center border border-lavender-gold/30 text-lavender-gold hover:border-lavender-gold/70 hover:bg-lavender-gold/10 transition-all duration-300 font-light text-sm"
                style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)" }}
                data-testid="showcase-prev"
              >
                ←
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-9 h-9 flex items-center justify-center border border-lavender-gold/30 text-lavender-gold hover:border-lavender-gold/70 hover:bg-lavender-gold/10 transition-all duration-300 font-light text-sm"
                style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)" }}
                data-testid="showcase-next"
              >
                →
              </motion.button>
            </div>
          </motion.div>

          <div className="contents lg:flex lg:flex-col lg:flex-1 lg:min-w-0 lg:max-w-none lg:order-last">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="order-first mb-4 lg:mb-8"
            >
              <div className="mb-1">
                <span
                  className="font-cinzel font-bold text-4xl md:text-5xl lg:text-6xl"
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
              </div>
              <h2
                className="font-cinzel text-lg md:text-xl font-medium text-cream/60 tracking-[0.2em]"
                data-testid="showcase-title"
              >
                Feel the Fabric
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="order-last max-w-sm lg:max-w-none"
            >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.38 }}
                data-testid={`showcase-info-${currentFabric.id}`}
              >
                <div className="w-8 h-px mb-5" style={{ background: currentFabric.color }} />
                <div
                  className="font-montserrat text-[10px] tracking-[0.4em] mb-2 uppercase"
                  style={{ color: `${currentFabric.color}88` }}
                >
                  {currentFabric.origin}
                </div>
                <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-cream mb-2 leading-tight">
                  {currentFabric.name}
                </h3>
                <div className="font-amiri text-xl mb-7" style={{ color: `${currentFabric.color}88` }}>
                  {currentFabric.nameAr}
                </div>

                <div className="space-y-3.5 mb-9">
                  {[
                    { label: "Texture Grade", value: currentFabric.texture },
                    { label: "Weave Origin", value: currentFabric.origin },
                    { label: "Care Method", value: "Dry Clean — Cool Press Only" },
                    { label: "Certification", value: "OEKO-TEX Standard 100 Certified" },
                  ].map((spec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * i }}
                      className="flex items-start gap-3.5"
                    >
                      <div className="w-0.5 flex-shrink-0 mt-0.5" style={{ background: currentFabric.color, minHeight: "14px" }} />
                      <div>
                        <div className="font-montserrat text-[9px] text-cream/30 tracking-widest uppercase mb-0.5">{spec.label}</div>
                        <div className="font-montserrat text-sm text-cream/65">{spec.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="font-montserrat text-xs font-semibold tracking-widest uppercase px-7 py-3 text-[#0a0c09] transition-all duration-300"
                    style={{
                      background: currentFabric.color,
                      clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                    }}
                    data-testid={`showcase-order-btn-${currentFabric.id}`}
                  >
                    Order This Fabric
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="font-montserrat text-xs font-medium tracking-widest uppercase px-5 py-3 border transition-all duration-300"
                    style={{
                      borderColor: `${currentFabric.color}40`,
                      color: currentFabric.color,
                      clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                    }}
                  >
                    Sample
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2 mt-8">
              {fabricItems.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setActive(i)}
                  data-testid={`showcase-dot-${i}`}
                  className="relative overflow-hidden transition-all duration-300"
                  style={{
                    width: i === active ? "52px" : "32px",
                    height: "32px",
                    border: i === active ? `1px solid ${f.color}80` : "1px solid rgba(201,168,76,0.14)",
                    borderRadius: "2px",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={f.src}
                    alt={f.name}
                    className="w-full h-full object-cover"
                    style={{ opacity: i === active ? 1 : 0.35 }}
                  />
                </button>
              ))}
            </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex flex-col items-center gap-2 mt-8"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          <span className="font-montserrat text-[9px] text-cream/20 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-lavender-gold/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
