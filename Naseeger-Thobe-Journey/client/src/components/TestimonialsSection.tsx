import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "عبدالله المنصور",
    nameEn: "Abdullah Al-Mansour",
    role: "Business Executive, Riyadh",
    quote: "Wearing a NASEEGER thobe feels like wearing the heritage of my grandfather, but with the confidence of a modern Saudi. The quality is unmatched in the Kingdom.",
    quoteAr: "ارتداء ثوب نسيجر يشعرني بتراث أجدادي، لكن بثقة السعودي العصري.",
    rating: 5,
    location: "الرياض",
  },
  {
    id: 2,
    name: "خالد الغامدي",
    nameEn: "Khalid Al-Ghamdi",
    role: "Royal Court Advisor, Jeddah",
    quote: "I have worn NASEEGER to official state ceremonies. The embroidery details and the way the fabric falls perfectly — it commands respect before you even speak.",
    quoteAr: "ارتديت نسيجر في مناسبات رسمية. التطريز والقماش يتحدثان قبل أن أتكلم.",
    rating: 5,
    location: "جدة",
  },
  {
    id: 3,
    name: "محمد العتيبي",
    nameEn: "Mohammed Al-Otaibi",
    role: "Heritage Architect, Diriyah",
    quote: "As someone who works in Diriyah itself, seeing the Najdi patterns woven into every NASEEGER design fills me with profound pride. This is what Vision 2030 looks like in fashion.",
    quoteAr: "كمعماري يعمل في الدرعية، الأنماط النجدية في تصاميم نسيجر تملأني بالفخر.",
    rating: 5,
    location: "الدرعية",
  },
  {
    id: 4,
    name: "سلطان الدوسري",
    nameEn: "Sultan Al-Dawsari",
    role: "Entrepreneur, Dammam",
    quote: "The Royal Lavender thobe I ordered arrived in the most stunning packaging. I wore it to my daughter's wedding and received more compliments than the groom.",
    quoteAr: "طلبت الثوب الإيجري الملكي وكان التغليف مذهلاً. ارتديته في زفاف ابنتي وكان الأجمل.",
    rating: 5,
    location: "الدمام",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 overflow-hidden" data-testid="testimonials-section">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #090c0a 0%, #0a0e0a 50%, #090c0a 100%)" }} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04]"
          style={{
            background: "conic-gradient(from 0deg, rgba(123,82,171,0) 0%, rgba(123,82,171,1) 25%, rgba(201,168,76,1) 50%, rgba(123,82,171,1) 75%, rgba(123,82,171,0) 100%)",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.03]"
          style={{
            background: "conic-gradient(from 180deg, rgba(201,168,76,0) 0%, rgba(201,168,76,1) 50%, rgba(201,168,76,0) 100%)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-montserrat text-xs tracking-[0.4em] text-lavender-gold/60 uppercase mb-4">
            — Voices of the Kingdom —
          </div>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-cream mb-4" data-testid="testimonials-title">
            What Our Clients Say
          </h2>
          <div className="font-amiri text-2xl text-lavender-pale/60">ما يقوله عملاؤنا</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
              data-testid={`testimonial-active-${active}`}
            >
              <div
                className="max-w-3xl mx-auto p-10 md:p-14 relative"
                style={{
                  background: "linear-gradient(145deg, rgba(14,20,15,0.7) 0%, rgba(8,11,9,0.95) 100%)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                }}
              >
                <div className="absolute top-6 left-8 text-6xl text-lavender-gold/20 font-serif leading-none">"</div>
                <div className="absolute bottom-6 right-8 text-6xl text-lavender-gold/20 font-serif leading-none rotate-180">"</div>

                <blockquote className="font-cormorant text-xl md:text-2xl text-cream/85 italic leading-relaxed text-center mb-6 relative z-10" data-testid="testimonial-quote">
                  {testimonials[active].quote}
                </blockquote>

                <div className="font-amiri text-base text-lavender-pale/50 text-center mb-8 italic">
                  {testimonials[active].quoteAr}
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonials[active].rating)].map((_, i) => (
                      <span key={i} className="text-lavender-gold text-sm">★</span>
                    ))}
                  </div>
                  <div className="font-cinzel text-sm font-semibold text-lavender-gold">
                    {testimonials[active].nameEn}
                  </div>
                  <div className="font-amiri text-base text-lavender-pale/70">
                    {testimonials[active].name}
                  </div>
                  <div className="font-montserrat text-xs text-cream/40 tracking-wide">
                    {testimonials[active].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mb-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                data-testid={`testimonial-dot-${i}`}
                className="transition-all duration-300"
                style={{
                  width: i === active ? "32px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === active ? "#c9a84c" : "rgba(201,168,76,0.3)",
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="p-4 text-left transition-all duration-300 rounded-sm"
                style={{
                  border: i === active ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(201,168,76,0.12)",
                  background: i === active ? "rgba(201,168,76,0.08)" : "rgba(12,18,13,0.5)",
                }}
                data-testid={`testimonial-tab-${i}`}
              >
                <div className="font-cinzel text-xs font-semibold text-cream/80 mb-1">{t.nameEn}</div>
                <div className="font-amiri text-sm text-lavender-pale/50 mb-1">{t.name}</div>
                <div className="font-montserrat text-[10px] text-cream/30">{t.location}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
