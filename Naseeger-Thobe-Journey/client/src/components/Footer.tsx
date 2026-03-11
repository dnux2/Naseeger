import { motion } from "framer-motion";


const footerLinks = {
  shop: [
    { label: "New Arrivals", href: "#collections" },
    { label: "All Thobes", href: "#collections" },
    { label: "Fabrics", href: "#fabrics" },
    { label: "Accessories", href: "#" },
    { label: "Gift Cards", href: "#" },
  ],
  heritage: [
    { label: "Our Story", href: "#about" },
    { label: "The Artisans", href: "#about" },
    { label: "Diriyah Roots", href: "#heritage" },
    { label: "Craft Process", href: "#about" },
    { label: "Sustainability", href: "#" },
  ],
  service: [
    { label: "Bespoke Orders", href: "#" },
    { label: "Care Guide", href: "#" },
    { label: "Returns Policy", href: "#" },
    { label: "Size Guide", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#070f09]" data-testid="footer">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cpolygon points='60,10 110,100 10,100' fill='none' stroke='%23c9a84c' stroke-width='1'/%3E%3Cpolygon points='60,25 90,85 30,85' fill='none' stroke='%237b52ab' stroke-width='0.7'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="py-16 border-b border-lavender-gold/10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="font-cinzel text-xl font-bold text-lavender-gold tracking-widest">NASEEGER</div>
                <div className="font-amiri text-base text-lavender-pale/70">نَسِيجَر</div>
              </div>

              <p className="font-montserrat text-xs text-cream/40 leading-relaxed max-w-xs mb-8">
                The premier Saudi thobe house, weaving together the architectural heritage
                of Ad-Diriyah with the finest contemporary fabrics. Worn by those who honor their roots.
              </p>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-lavender-gold/60" />
                <span className="font-montserrat text-xs text-cream/40">حي الدرعية التاريخي، الرياض</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-lavender-gold/60" />
                <span className="font-montserrat text-xs text-cream/40">Diriyah Quarter, Riyadh, KSA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-lavender-gold/60" />
                <span className="font-montserrat text-xs text-cream/40">hello@naseeger.sa</span>
              </div>

              <div className="flex gap-3 mt-8">
                {["Instagram", "X (Twitter)", "TikTok", "Snapchat"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 flex items-center justify-center border border-lavender-gold/20 hover:border-lavender-gold/50 transition-all duration-300 text-lavender-gold/50 hover:text-lavender-gold font-montserrat text-[8px] tracking-wide"
                    style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)" }}
                    title={social}
                    data-testid={`footer-social-${social.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {social[0]}
                  </motion.a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-cinzel text-sm font-semibold text-cream/80 tracking-wider mb-6 uppercase">
                  {category === "shop" ? "Shop" : category === "heritage" ? "Heritage" : "Service"}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="font-montserrat text-xs text-cream/40 hover:text-lavender-gold transition-colors duration-300 flex items-center gap-2 group"
                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                      >
                        <span className="w-3 h-px bg-lavender-gold/30 group-hover:w-5 group-hover:bg-lavender-gold/60 transition-all duration-300" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-montserrat text-xs text-cream/25 tracking-wide">
              © 2025 NASEEGER — نَسِيجَر. All rights reserved. Made in the Kingdom of Saudi Arabia.
            </div>
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a key={item} href="#" className="font-montserrat text-xs text-cream/25 hover:text-cream/50 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
