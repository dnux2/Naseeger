import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import logoImg from "@assets/‏لقطة_الشاشة_١٤٤٧-٠٩-٢٢_في_٥.٤١.٤٨_ص_1773196912122.png";

const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Fabrics", href: "#fabrics" },
  { label: "Heritage", href: "#heritage" },
  { label: "About", href: "#about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 80));
    return () => unsub();
  }, [scrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      data-testid="navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forest-deep/85 backdrop-blur-xl border-b border-lavender-gold/20 shadow-glass"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            whileHover={{ scale: 1.04 }}
            className="flex items-center group"
            data-testid="nav-logo"
          >
            <img
              src={logoImg}
              alt="NASEEGER — نسيجر"
              className="h-14 w-auto object-contain"
              style={{ mixBlendMode: "screen", filter: "brightness(1.1) contrast(1.05)" }}
            />
            <div className="ml-2 flex flex-col leading-tight">
              <span
                className="font-cinzel font-bold text-base md:text-lg tracking-[0.18em]"
                style={{
                  background: "linear-gradient(135deg, #f5f0e8 0%, #c9a84c 45%, #a07fd0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                NASEEGER
              </span>
              <span className="font-amiri text-xs text-cream/40 tracking-widest">نَسِيجَر</span>
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                whileHover={{ y: -2 }}
                className="font-montserrat text-sm font-medium text-cream/80 hover:text-lavender-gold transition-colors duration-300 tracking-widest uppercase relative group"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-lavender-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-montserrat text-xs font-semibold tracking-widest uppercase px-6 py-2.5 border border-lavender-gold/60 text-lavender-gold hover:bg-lavender-gold/10 transition-all duration-300 rounded-sm"
              data-testid="nav-btn-shop"
              onClick={() => { const el = document.querySelector("#collections"); el?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Shop Now
            </motion.button>
          </div>

          <button
            className="md:hidden text-cream/80 hover:text-lavender-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="nav-mobile-menu-btn"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-forest-deep/95 backdrop-blur-xl border-t border-lavender-gold/20"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-montserrat text-sm font-medium text-cream/80 hover:text-lavender-gold transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
            <button
              className="font-montserrat text-xs font-semibold tracking-widest uppercase px-6 py-3 border border-lavender-gold/60 text-lavender-gold hover:bg-lavender-gold/10 transition-all rounded-sm w-full mt-2"
              onClick={() => { const el = document.querySelector("#collections"); el?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); }}
            >
              Shop Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
