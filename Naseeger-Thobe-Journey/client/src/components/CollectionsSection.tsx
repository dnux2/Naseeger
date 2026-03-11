import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import fabricImg from "@assets/8c476e39-fd37-4712-b181-3216b93b3148_1773193733604.jpg";

const collections = [
  {
    id: 1,
    season: "Spring / Summer 2025",
    seasonAr: "ربيع وصيف ٢٠٢٥",
    title: "Al-Diriyah Bloom",
    titleAr: "زهر الدرعية",
    description: "Inspired by the wildflowers that bloom along the banks of Wadi Hanifah each spring. Light linens and breathable cottons in earthy pastels.",
    pieces: "24 pieces",
    tag: "New Season",
    gradient: "linear-gradient(135deg, rgba(16,22,17,0.95) 0%, rgba(30,60,35,0.7) 100%)",
    accentColor: "#3d7a57",
    textColor: "#c9a84c",
  },
  {
    id: 2,
    season: "Fall / Winter 2025",
    seasonAr: "خريف وشتاء ٢٠٢٥",
    title: "The Sultan's Guard",
    titleAr: "حراسة السلطان",
    description: "Deep, commanding tones drawn from the rich history of the Saudi royal court. Heavyweight wools and structured silhouettes for the modern Saudi gentleman.",
    pieces: "18 pieces",
    tag: "Coming Soon",
    gradient: "linear-gradient(135deg, rgba(13,31,22,0.95) 0%, rgba(26,26,46,0.85) 100%)",
    accentColor: "#7b52ab",
    textColor: "#a07fd0",
  },
  {
    id: 3,
    season: "Limited Edition",
    seasonAr: "إصدار محدود",
    title: "Heritage Masters",
    titleAr: "أساتذة التراث",
    description: "A curated collection of 12 individually hand-crafted thobes, each one a collaboration between our master tailors and Saudi heritage artists.",
    pieces: "12 pieces only",
    tag: "Exclusive",
    gradient: "linear-gradient(135deg, rgba(16,22,17,0.92) 0%, rgba(89,59,125,0.7) 100%)",
    accentColor: "#c9a84c",
    textColor: "#c9a84c",
  },
];

function CollectionCard({ collection, index }: { collection: typeof collections[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 30 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      style={{
        background: collection.gradient,
        border: hovered ? `1px solid ${collection.accentColor}50` : "1px solid rgba(201,168,76,0.15)",
        boxShadow: hovered
          ? `0 40px 80px -20px rgba(0,0,0,0.7), 0 0 40px ${collection.accentColor}25`
          : "0 20px 40px -10px rgba(0,0,0,0.4)",
        transition: "all 0.4s ease",
      }}
      data-testid={`collection-card-${collection.id}`}
    >
      <div className="p-8 md:p-10 min-h-[360px] flex flex-col justify-between relative">
        <div
          className="absolute top-0 right-0 w-48 h-48 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
          style={{
            background: `radial-gradient(circle, ${collection.accentColor} 0%, transparent 70%)`,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='20,3 37,32 3,32' fill='none' stroke='%23c9a84c' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div
                className="inline-flex items-center gap-2 font-montserrat text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 mb-4"
                style={{
                  background: `${collection.accentColor}20`,
                  border: `1px solid ${collection.accentColor}50`,
                  color: collection.accentColor,
                  clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)",
                }}
              >
                {collection.tag}
              </div>
              <div className="font-montserrat text-xs text-cream/40 tracking-widest uppercase mb-1">
                {collection.season}
              </div>
              <div className="font-amiri text-sm text-cream/30 mb-4">
                {collection.seasonAr}
              </div>
            </div>
            <div
              className="font-montserrat text-xs text-right"
              style={{ color: `${collection.accentColor}80` }}
            >
              {collection.pieces}
            </div>
          </div>

          <h3
            className="font-cinzel text-2xl md:text-3xl font-bold text-cream mb-2 leading-tight"
            data-testid={`collection-title-${collection.id}`}
          >
            {collection.title}
          </h3>
          <div className="font-amiri text-xl mb-6" style={{ color: `${collection.textColor}80` }}>
            {collection.titleAr}
          </div>

          <p className="font-montserrat text-xs text-cream/50 leading-relaxed">
            {collection.description}
          </p>
        </div>

        <div className="relative z-10 mt-8 flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-montserrat text-[11px] font-semibold tracking-widest uppercase px-7 py-3 transition-all duration-300"
            style={{
              background: hovered ? collection.accentColor : "transparent",
              border: `1px solid ${collection.accentColor}70`,
              color: hovered ? "#090c0a" : collection.accentColor,
              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
            }}
            data-testid={`collection-btn-${collection.id}`}
          >
            View Collection
          </motion.button>
          <motion.div
            animate={{ x: hovered ? 6 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-px"
            style={{ background: collection.accentColor }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function CollectionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yLeft = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={sectionRef} id="collections" className="relative py-32 overflow-hidden" data-testid="collections-section">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #090c0a 0%, #0c130d 50%, #090c0a 100%)" }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: yLeft, background: "radial-gradient(circle, rgba(123,82,171,0.2) 0%, transparent 70%)" }}
          className="absolute left-0 top-0 w-96 h-96 rounded-full"
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          style={{ y: yRight, background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)" }}
          className="absolute right-0 bottom-0 w-96 h-96 rounded-full"
          animate={{ opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="font-montserrat text-xs tracking-[0.4em] text-lavender-gold/60 uppercase mb-4">
            — Curated Excellence —
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6" data-testid="collections-title">
            Our Collections
          </h2>
          <div className="font-amiri text-2xl text-lavender-pale/60 mb-6">مجموعاتنا</div>
          <div className="flex justify-center gap-3 items-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-lavender-gold/60" />
            <div className="w-2 h-2 rounded-full bg-lavender-gold/60" />
            <div className="w-8 h-px bg-lavender-gold/60" />
            <div className="w-2 h-2 rotate-45 border border-lavender-gold/60" />
            <div className="w-8 h-px bg-lavender-gold/60" />
            <div className="w-2 h-2 rounded-full bg-lavender-gold/60" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-lavender-gold/60" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, i) => (
            <CollectionCard key={collection.id} collection={collection} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
