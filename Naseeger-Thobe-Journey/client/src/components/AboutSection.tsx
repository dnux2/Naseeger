import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import craftsmanImg from "@assets/generated_images/naseeger_craftsman.png";
const processSteps = [
  {
    step: "01",
    title: "Source",
    titleAr: "المصدر",
    desc: "Finest fabrics selected from certified mills across the Arab world and Europe.",
  },
  {
    step: "02",
    title: "Design",
    titleAr: "التصميم",
    desc: "Each pattern hand-sketched by our senior designers, inspired by Najdi geometric art.",
  },
  {
    step: "03",
    title: "Cut",
    titleAr: "القص",
    desc: "Precision-cut using both traditional methods and modern laser technology.",
  },
  {
    step: "04",
    title: "Weave",
    titleAr: "النسيج",
    desc: "Master artisans hand-stitch every embroidery detail with gold and lavender threads.",
  },
  {
    step: "05",
    title: "Perfect",
    titleAr: "الإتقان",
    desc: "A 12-point quality inspection before every thobe is approved for delivery.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden" data-testid="about-section">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #090c0a 0%, #090c0a 50%, #080a08 100%)" }} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="font-montserrat text-xs tracking-[0.4em] text-lavender-gold/60 uppercase mb-4">
              — The NASEEGER Story —
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight" data-testid="about-title">
              Where Tradition<br />
              <span className="text-lavender-gold">Meets Tomorrow</span>
            </h2>
            <div className="font-amiri text-2xl text-lavender-pale/60 mb-8">
              حيث يلتقي التراث بالمستقبل
            </div>

            <div className="space-y-5">
              <p className="font-montserrat text-sm text-cream/55 leading-relaxed">
                In 2019, master tailor Ibrahim Al-Naseeri walked out of his family's 80-year-old Riyadh atelier with a
                single vision: to create a thobe brand worthy of the Saudi Renaissance unfolding around him. He named it
                after the Arabic root "نسج" — to weave — and added a modern twist, giving birth to NASEEGER.
              </p>
              <p className="font-montserrat text-sm text-cream/55 leading-relaxed">
                Today, NASEEGER employs 40+ master artisans across our Diriyah atelier and Jeddah distribution center.
                Our designs are worn by government ministers, cultural ambassadors, and everyday Saudi men who understand
                that how you dress is how you honor your roots.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="font-montserrat text-xs font-semibold tracking-widest uppercase px-8 py-3 bg-lavender-deep text-cream hover:bg-lavender transition-colors duration-300"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                data-testid="about-btn-story"
                onClick={() => document.querySelector("#heritage")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Full Story
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="font-montserrat text-xs font-medium tracking-widest uppercase px-8 py-3 border border-lavender-gold/40 text-lavender-gold hover:border-lavender-gold transition-colors duration-300"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                data-testid="about-btn-atelier"
              >
                Visit Atelier
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{
                border: "1px solid rgba(201,168,76,0.25)",
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
            >
              <img
                src={craftsmanImg}
                alt="NASEEGER Craftsman"
                className="w-full h-[480px] object-cover"
                style={{ filter: "brightness(1.0) contrast(1.05) saturate(1.05)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(9,12,10,0.85) 100%)" }}
              />
              <div className="absolute bottom-6 left-6">
                <div className="font-montserrat text-[9px] tracking-[0.3em] text-lavender-gold/60 uppercase mb-1">
                  Diriyah Atelier · Riyadh
                </div>
                <div className="font-cinzel text-sm text-cream/80">Master Weaver at Work</div>
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
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-cream mb-2">
              Our Craft Process
            </h3>
            <div className="font-amiri text-xl text-lavender-pale/60">عملية الصنع</div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-lavender-gold/30 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="text-center relative"
                  data-testid={`process-step-${i}`}
                >
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(14,20,15,0.85) 0%, rgba(8,11,9,0.95) 100%)",
                        border: "1px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      <span className="font-cinzel text-lg font-bold text-lavender-gold">{step.step}</span>
                    </div>
                  </div>
                  <h4 className="font-cinzel text-sm font-semibold text-cream mb-1">{step.title}</h4>
                  <div className="font-amiri text-sm text-lavender-pale/50 mb-2">{step.titleAr}</div>
                  <p className="font-montserrat text-[11px] text-cream/40 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
