import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import thobeGrey from "@assets/‏لقطة_الشاشة_١٤٤٧-٠٩-٢٢_في_٤.٥١.٣٧_ص_1773196277276.png";
import thobeLavender from "@assets/thobe_lavender.png";
import thobeWhite from "@assets/thobe_white.png";

const fabrics = [
  {
    id: 1,
    name: "Royal Lavender",
    nameAr: "اللافندر الملكي",
    description: "Pure premium cotton with a distinctive lavender hue — the signature of NASEEGER craftsmanship.",
    price: "SAR 890",
    colorHex: "#7b52ab",
    accentColor: "#a07fd0",
    badge: "Signature",
    img: thobeLavender,
    imgFilter: "brightness(1.05) saturate(1.15) contrast(1.03)",
  },
  {
    id: 2,
    name: "Najdi White",
    nameAr: "الأبيض النجدي",
    description: "Ultra-fine Egyptian cotton, brilliantly white. Embroidered with traditional Diriyah motifs at the cuffs.",
    price: "SAR 1,250",
    colorHex: "#e8e0d4",
    accentColor: "#c9a84c",
    badge: "Heritage",
    img: thobeWhite,
    imgFilter: "brightness(1.0) saturate(0.95) contrast(1.05)",
  },
  {
    id: 3,
    name: "Desert Sage",
    nameAr: "مريمية الصحراء",
    description: "A subtle sage-green linen blend that honors the colors of the Arabian highlands and ancient Hejaz.",
    price: "SAR 760",
    colorHex: "#3d7a57",
    accentColor: "#c9a84c",
    badge: "New Season",
    img: thobeGrey,
    imgFilter: "brightness(0.85) saturate(1.3) hue-rotate(90deg) contrast(0.95)",
  },
  {
    id: 4,
    name: "Midnight Ebony",
    nameAr: "أبنوس منتصف الليل",
    description: "Deep charcoal wool blend, tailored for formal occasions. Embodies understated Saudi power.",
    price: "SAR 1,450",
    colorHex: "#1a1a2e",
    accentColor: "#7b52ab",
    badge: "Premium",
    img: thobeGrey,
    imgFilter: "brightness(0.55) saturate(0.4) contrast(1.1)",
  },
  {
    id: 5,
    name: "Golden Dunes",
    nameAr: "كثبان ذهبية",
    description: "Warm desert-sand tone with gold thread embroidery. Inspired by the great Nefud dunes.",
    price: "SAR 980",
    colorHex: "#c9a84c",
    accentColor: "#f5f0e8",
    badge: "Limited",
    img: thobeGrey,
    imgFilter: "brightness(1.1) saturate(1.5) sepia(0.55) hue-rotate(5deg) contrast(0.95)",
  },
  {
    id: 6,
    name: "Pearl Silk",
    nameAr: "حرير اللؤلؤ",
    description: "Lustrous silk-cotton blend in pearl white. The ultimate expression of Saudi elegance.",
    price: "SAR 2,100",
    colorHex: "#d4cfc8",
    accentColor: "#7b52ab",
    badge: "Exclusive",
    img: thobeGrey,
    imgFilter: "brightness(1.25) saturate(0.25) contrast(0.9)",
  },
];

function FabricCard({ fabric, index }: { fabric: typeof fabrics[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group relative flex flex-col rounded-lg overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(145deg, rgba(16,22,17,0.8) 0%, rgba(9,12,10,0.97) 100%)",
        boxShadow: hovered
          ? `0 30px 60px -10px rgba(0,0,0,0.7), 0 0 40px ${fabric.accentColor}40`
          : "0 20px 40px -10px rgba(0,0,0,0.5)",
        border: hovered ? `1px solid ${fabric.accentColor}60` : "1px solid rgba(201,168,76,0.15)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      data-testid={`fabric-card-${fabric.id}`}
    >
      <div className="h-64 relative overflow-hidden">
        <motion.img
          src={fabric.img}
          alt={fabric.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ filter: fabric.imgFilter, transition: "filter 0.4s ease" }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, rgba(9,12,10,0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center top, ${fabric.accentColor} 0%, transparent 70%)`,
          }}
        />

        <div className="absolute top-3 right-3 z-10">
          <span
            className="font-montserrat text-[10px] font-bold tracking-widest uppercase px-3 py-1.5"
            style={{
              background: `${fabric.accentColor}25`,
              border: `1px solid ${fabric.accentColor}60`,
              color: fabric.accentColor,
              backdropFilter: "blur(8px)",
              clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
            }}
          >
            {fabric.badge}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-cinzel text-lg font-semibold text-cream mb-1" data-testid={`fabric-name-${fabric.id}`}>
            {fabric.name}
          </h3>
          <div className="font-amiri text-base text-lavender-pale/70">
            {fabric.nameAr}
          </div>
        </div>

        <p className="font-montserrat text-xs text-cream/50 leading-relaxed mb-6 flex-1">
          {fabric.description}
        </p>

        <div className="flex items-center justify-between">
          <span
            className="font-cinzel text-lg font-semibold"
            style={{ color: fabric.accentColor }}
            data-testid={`fabric-price-${fabric.id}`}
          >
            {fabric.price}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-montserrat text-[10px] font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-300"
            style={{
              border: `1px solid ${fabric.accentColor}60`,
              color: fabric.accentColor,
              background: hovered ? `${fabric.accentColor}15` : "transparent",
              clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)",
            }}
            data-testid={`fabric-btn-${fabric.id}`}
          >
            Select
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${fabric.accentColor}, transparent)` }} />
    </motion.div>
  );
}

export default function FabricCards3D() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="fabrics" className="relative py-32 overflow-hidden" data-testid="fabrics-section">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep via-forest-deep/95 to-forest-deep" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M80 0L0 0 0 80" fill="none" stroke="#c9a84c" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="font-montserrat text-xs tracking-[0.4em] text-lavender-gold/60 uppercase mb-4">
            — Our Finest Materials —
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6" data-testid="fabrics-title">
            The Fabric Collection
          </h2>
          <div className="font-amiri text-2xl text-lavender-pale/60 mb-6">مجموعة الأقمشة</div>
          <p className="font-montserrat text-sm text-cream/50 max-w-2xl mx-auto leading-relaxed">
            Each fabric in our collection is sourced from the finest mills across Egypt, Italy and the Arabian Gulf,
            then hand-finished by our master tailors in Riyadh.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <div className="w-12 h-px bg-lavender-gold/60" />
            <div className="w-2 h-2 rounded-full bg-lavender-gold/60 -mt-0.5" />
            <div className="w-12 h-px bg-lavender-gold/60" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {fabrics.map((fabric, i) => (
            <FabricCard key={fabric.id} fabric={fabric} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
