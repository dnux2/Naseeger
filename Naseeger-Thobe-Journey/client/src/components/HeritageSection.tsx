import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import craftsmanImg from "@assets/image_1773194854629.png";

const DiriyahBuilding = ({ x, y, width, height, opacity = 1 }: any) => (
  <g opacity={opacity}>
    <rect x={x} y={y} width={width} height={height} fill="none" stroke="currentColor" strokeWidth="0.8" />
    <rect x={x + width * 0.1} y={y - 8} width={width * 0.8} height={8} fill="none" stroke="currentColor" strokeWidth="0.6" />
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x={x + (width / 4) * i + width * 0.08}
        y={y + height * 0.2}
        width={width * 0.15}
        height={height * 0.25}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    ))}
    <path d={`M${x + width * 0.3},${y + height * 0.6} L${x + width * 0.5},${y + height * 0.45} L${x + width * 0.7},${y + height * 0.6} L${x + width * 0.7},${y + height} L${x + width * 0.3},${y + height}Z`} fill="none" stroke="currentColor" strokeWidth="0.5" />
  </g>
);

const DiriyahSkyline = () => (
  <svg
    className="absolute bottom-0 left-0 right-0 w-full text-lavender-gold/[0.07]"
    viewBox="0 0 1440 300"
    preserveAspectRatio="xMidYMax slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <DiriyahBuilding x={20} y={80} width={80} height={220} opacity={0.5} />
    <DiriyahBuilding x={110} y={40} width={100} height={260} opacity={0.7} />
    <DiriyahBuilding x={220} y={100} width={60} height={200} opacity={0.4} />
    <DiriyahBuilding x={290} y={20} width={120} height={280} opacity={0.8} />
    <DiriyahBuilding x={420} y={60} width={90} height={240} opacity={0.6} />
    <DiriyahBuilding x={520} y={110} width={70} height={190} opacity={0.4} />
    <DiriyahBuilding x={600} y={30} width={130} height={270} opacity={0.9} />
    <DiriyahBuilding x={740} y={70} width={100} height={230} opacity={0.65} />
    <DiriyahBuilding x={850} y={50} width={80} height={250} opacity={0.7} />
    <DiriyahBuilding x={940} y={90} width={110} height={210} opacity={0.5} />
    <DiriyahBuilding x={1060} y={25} width={120} height={275} opacity={0.85} />
    <DiriyahBuilding x={1190} y={60} width={80} height={240} opacity={0.6} />
    <DiriyahBuilding x={1280} y={80} width={100} height={220} opacity={0.5} />
    <DiriyahBuilding x={1390} y={40} width={60} height={260} opacity={0.4} />

    <path
      d="M0,300 L0,200 C200,180 400,160 720,150 C1040,140 1240,160 1440,180 L1440,300Z"
      fill="rgba(13,31,22,0.6)"
    />
  </svg>
);

const heritageValues = [
  {
    icon: "◇",
    title: "Najdi Craftsmanship",
    titleAr: "الحرفية النجدية",
    text: "Each thobe is handcrafted by artisans who have inherited generations of Najdi tailoring traditions.",
  },
  {
    icon: "✦",
    title: "Diriyah Inspired",
    titleAr: "مستوحى من الدرعية",
    text: "Our aesthetic draws directly from the geometric mud-brick patterns of UNESCO-listed At-Turaif in Ad-Diriyah.",
  },
  {
    icon: "◈",
    title: "Modern Elegance",
    titleAr: "الأناقة الحديثة",
    text: "Heritage techniques meet contemporary silhouettes — thobes designed for the confident Saudi of today.",
  },
  {
    icon: "❋",
    title: "Premium Sourcing",
    titleAr: "مصادر متميزة",
    text: "We partner exclusively with certified organic cotton farms and luxury fabric mills from Egypt and Italy.",
  },
];

export default function HeritageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} id="heritage" className="relative py-36 overflow-hidden" data-testid="heritage-section">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #090c0a 0%, #0c1610 50%, #090c0a 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpolygon points='50,5 95,75 5,75' fill='none' stroke='rgba(201,168,76,0.05)' stroke-width='1'/%3E%3Cpolygon points='50,20 80,65 20,65' fill='none' stroke='rgba(123,82,171,0.04)' stroke-width='0.8'/%3E%3Ccircle cx='50' cy='50' r='2' fill='rgba(201,168,76,0.06)'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      <DiriyahSkyline />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="font-montserrat text-xs tracking-[0.4em] text-lavender-gold/60 uppercase mb-4">
            — Roots & Identity —
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6" data-testid="heritage-title">
            Born from Heritage
          </h2>
          <div className="font-amiri text-2xl text-lavender-pale/60 mb-6">
            من رحم التراث
          </div>
          <p className="font-montserrat text-sm text-cream/50 max-w-3xl mx-auto leading-relaxed">
            NASEEGER — نَسِيجَر — translates from Arabic as "the weaver." We weave together the ancient architectural
            patterns of Diriyah, the golden threads of Saudi heritage, and the refined sensibility of the modern
            Gulf gentleman.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{
                  border: "1px solid rgba(201,168,76,0.25)",
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                }}
              >
                <img
                  src={craftsmanImg}
                  alt="Diriyah Heritage Craftsman"
                  className="w-full h-[420px] object-cover"
                  style={{ filter: "brightness(1.05) contrast(1.08) saturate(1.1)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent 50%, rgba(9,12,10,0.85) 100%)",
                  }}
                />
                <div className="absolute bottom-6 left-6">
                  <div className="font-montserrat text-[9px] tracking-[0.3em] text-lavender-gold/60 uppercase mb-1">
                    At-Turaif Quarter · Diriyah
                  </div>
                  <div className="font-cinzel text-sm text-cream/80">Heritage Craft Revival</div>
                </div>
                <div
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center"
                  style={{ border: "1px solid rgba(201,168,76,0.3)", clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                >
                  <div className="font-amiri text-xs text-lavender-gold/70">ن</div>
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-lavender-gold/60"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-lavender-gold/60"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-cream mb-4 leading-tight">
                The Art of Saudi<br />
                <span className="text-lavender-gold">Heritage Weaving</span>
              </h3>
              <p className="font-montserrat text-sm text-cream/55 leading-relaxed mb-6">
                Founded in the historic Diriyah quarter of Riyadh, NASEEGER was born from a vision to preserve and elevate
                the traditional Saudi thobe. Our ateliers sit within sight of the ancient mud-brick walls of At-Turaif —
                a constant reminder of the living heritage we are entrusted to carry forward.
              </p>
              <p className="font-montserrat text-sm text-cream/55 leading-relaxed">
                Every stitch, every embroidered motif, and every chosen fabric tells the story of a civilization that
                built empires from sand and trade. We are not simply tailors — we are custodians of Saudi identity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "2019", label: "Founded in Diriyah", labelAr: "تأسست في الدرعية" },
                { num: "40+", label: "Master Artisans", labelAr: "أستاذ حرفي" },
                { num: "12", label: "Fabric Origins", labelAr: "مصدر قماش" },
                { num: "SAR", label: "Saudi-First Brand", labelAr: "علامة سعودية أولاً" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-4 border border-lavender-gold/20 rounded-sm"
                  style={{ background: "rgba(17,24,18,0.5)" }}
                  data-testid={`heritage-stat-${i}`}
                >
                  <div className="font-cinzel text-xl font-bold text-lavender-gold mb-1">{stat.num}</div>
                  <div className="font-montserrat text-[10px] text-cream/50 tracking-wide uppercase">{stat.label}</div>
                  <div className="font-amiri text-sm text-lavender-pale/40">{stat.labelAr}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {heritageValues.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
              whileHover={{ y: -5 }}
              className="p-6 border border-lavender-gold/15 rounded-sm hover:border-lavender-gold/35 transition-all duration-300"
              style={{ background: "rgba(15,20,16,0.45)" }}
              data-testid={`heritage-value-${i}`}
            >
              <div className="text-2xl text-lavender-gold mb-4">{value.icon}</div>
              <h4 className="font-cinzel text-sm font-semibold text-cream mb-1">{value.title}</h4>
              <div className="font-amiri text-sm text-lavender-pale/50 mb-3">{value.titleAr}</div>
              <p className="font-montserrat text-xs text-cream/45 leading-relaxed">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
