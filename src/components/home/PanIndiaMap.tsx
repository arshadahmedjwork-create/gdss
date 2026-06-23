import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Navigation } from "lucide-react";

interface City {
  name: string;
  state: string;
  services: string[];
  cx: number;
  cy: number;
}

const cities: City[] = [
  { name: "Chennai", state: "Tamil Nadu", services: ["Matrimonial", "Insurance Fraud", "BGV"], cx: 335, cy: 570 },
  { name: "Bangalore", state: "Karnataka", services: ["Corporate BGV", "Digital Forensics", "Due Diligence"], cx: 285, cy: 560 },
  { name: "Hyderabad", state: "Telangana", services: ["Corporate BGV", "Insurance Fraud", "NRI Verification"], cx: 310, cy: 500 },
  { name: "Mumbai", state: "Maharashtra", services: ["Corporate BGV", "Due Diligence", "Asset Tracing"], cx: 190, cy: 420 },
  { name: "Delhi", state: "Delhi NCR", services: ["Corporate BGV", "Insurance Fraud", "Matrimonial Verification"], cx: 310, cy: 198 },
  { name: "Pune", state: "Maharashtra", services: ["Corporate BGV", "Vendor Verification", "Due Diligence"], cx: 205, cy: 455 },
  { name: "Coimbatore", state: "Tamil Nadu", services: ["Matrimonial Verification", "Background Check"], cx: 275, cy: 610 },
  { name: "Kochi", state: "Kerala", services: ["NRI Verification", "Matrimonial", "Asset Tracing"], cx: 252, cy: 640 }
];

// Highly accurate India SVG path — drawn to match real geographic shape within a 560x760 viewBox
const INDIA_MAIN = `
  M 310 30
  C 335 32, 358 28, 375 42
  C 395 55, 405 68, 418 72
  C 432 76, 448 70, 462 80
  C 478 92, 482 110, 490 122
  C 498 135, 505 145, 502 160
  C 498 172, 488 178, 480 190
  C 472 202, 468 215, 472 228
  C 476 242, 488 252, 492 265
  C 496 278, 492 292, 488 305
  C 484 318, 478 330, 475 345
  C 472 360, 474 375, 470 388
  C 466 402, 458 414, 452 428
  C 446 442, 442 457, 438 472
  C 434 487, 432 502, 428 516
  C 424 530, 418 543, 412 556
  C 406 569, 398 580, 390 590
  C 382 600, 372 608, 362 615
  C 350 622, 338 627, 328 635
  C 316 643, 306 651, 295 657
  C 282 663, 270 667, 258 660
  C 245 653, 236 640, 226 628
  C 215 615, 206 602, 198 588
  C 190 574, 185 559, 180 544
  C 175 528, 172 512, 170 496
  C 168 480, 168 464, 165 448
  C 162 432, 156 418, 148 404
  C 140 390, 132 377, 126 362
  C 120 347, 116 332, 112 316
  C 108 300, 105 284, 104 268
  C 103 252, 105 236, 108 220
  C 111 204, 116 188, 120 172
  C 124 156, 126 140, 132 125
  C 138 110, 147 96, 158 84
  C 169 72, 182 63, 197 55
  C 212 47, 228 42, 245 38
  C 262 34, 286 28, 310 30 Z
`;

const KERALA_EXTRA = `
  M 252 640
  C 245 650, 240 662, 236 676
  C 232 688, 230 700, 228 712
  C 232 714, 236 712, 240 708
  C 244 700, 248 690, 252 678
  C 256 665, 258 651, 258 640 Z
`;

const TN_COAST = `
  M 340 620
  C 348 632, 352 645, 355 658
  C 358 668, 358 678, 355 688
  C 352 696, 348 702, 344 706
  C 340 710, 336 710, 332 706
  C 328 700, 326 692, 326 682
  C 326 672, 328 660, 330 648
  C 332 636, 336 627, 340 620 Z
`;

const ANDAMAN = `
  M 500 440
  C 502 445, 504 452, 504 458
  C 504 464, 502 468, 500 470
  C 498 468, 496 464, 496 458
  C 496 452, 498 445, 500 440 Z
  M 503 475
  C 505 480, 506 486, 505 490
  C 504 494, 502 496, 500 494
  C 498 492, 497 488, 497 483
  C 497 478, 499 474, 503 475 Z
`;

const NORTHEAST = `
  M 448 265
  C 462 262, 476 262, 490 268
  C 505 274, 518 284, 528 295
  C 538 306, 544 320, 545 334
  C 546 348, 542 362, 534 372
  C 526 382, 514 388, 502 390
  C 490 392, 478 388, 468 380
  C 458 372, 452 360, 449 347
  C 446 334, 446 320, 448 307
  C 449 294, 448 278, 448 265 Z
`;

const SRI_LANKA = `
  M 348 695
  C 355 698, 362 704, 366 712
  C 370 720, 372 730, 370 740
  C 368 748, 362 754, 355 756
  C 348 758, 341 754, 336 748
  C 330 740, 328 730, 330 720
  C 332 710, 338 702, 345 697 Z
`;

const STATE_BORDERS = [
  "M 175 455 Q 220 470 260 480 Q 300 490 330 505",
  "M 182 330 Q 210 300 240 280",
  "M 260 155 Q 285 170 310 198",
  "M 310 198 Q 330 250 350 290 Q 365 320 365 355",
  "M 285 560 Q 310 540 330 520 Q 350 500 365 480",
  "M 445 320 Q 430 360 420 400",
];

const PanIndiaMap = () => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [tooltip, setTooltip] = useState<{ city: City; x: number; y: number } | null>(null);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "hsl(var(--card))", borderTop: "1px solid hsl(var(--border))", borderBottom: "1px solid hsl(var(--border))" }}>
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="container relative mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Extensive Coverage</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">PAN India Operations</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm">
            Our intelligence network spans across the entire country — click any city marker to explore our local service coverage.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-2xl border border-border"
            style={{ background: "#e8f4fd" }}
          >
            <div className="absolute inset-0" style={{
              background: "linear-gradient(135deg, #cce8f7 0%, #b8dff0 40%, #a8d5ea 100%)"
            }} />

            <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm rounded-md px-3 py-1.5 shadow-sm border border-gray-200 flex items-center gap-1.5">
              <Navigation className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-gray-700">GDSS Coverage Map</span>
            </div>

            <svg
              viewBox="90 20 480 760"
              className="w-full relative z-10"
              style={{ minHeight: 480, maxHeight: 680 }}
              role="img"
              aria-label="Interactive India map with clickable city markers"
            >
              <text x="555" y="380" fill="#89c4e0" fontSize="9" opacity="0.6" fontFamily="sans-serif">Bay of</text>
              <text x="552" y="392" fill="#89c4e0" fontSize="9" opacity="0.6" fontFamily="sans-serif">Bengal</text>
              <text x="110" y="480" fill="#89c4e0" fontSize="9" opacity="0.6" fontFamily="sans-serif">Arabian</text>
              <text x="112" y="492" fill="#89c4e0" fontSize="9" opacity="0.6" fontFamily="sans-serif">Sea</text>
              <text x="300" y="760" fill="#89c4e0" fontSize="9" opacity="0.6" fontFamily="sans-serif">Indian Ocean</text>

              <path
                d={INDIA_MAIN}
                fill="#d4e6c3"
                stroke="#8aad6f"
                strokeWidth="1.5"
                strokeLinejoin="round"
                filter="url(#mapShadow)"
              />

              {STATE_BORDERS.map((d, i) => (
                <path key={i} d={d} fill="none" stroke="#9db882" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.6" />
              ))}

              <path d={KERALA_EXTRA} fill="#c8e0b0" stroke="#8aad6f" strokeWidth="1" />
              <path d={TN_COAST} fill="#c8e0b0" stroke="#8aad6f" strokeWidth="1" />
              <path d={SRI_LANKA} fill="#d4e6c3" stroke="#8aad6f" strokeWidth="1" />
              <text x="348" y="728" fill="#7a9a60" fontSize="6.5" textAnchor="middle" fontFamily="sans-serif" fontStyle="italic">Sri Lanka</text>
              <path d={NORTHEAST} fill="#cde4b8" stroke="#8aad6f" strokeWidth="1.2" />
              <path d={ANDAMAN} fill="#c8e0b0" stroke="#8aad6f" strokeWidth="1" />
              <text x="502" y="500" fill="#7a9a60" fontSize="6" textAnchor="middle" fontFamily="sans-serif" fontStyle="italic">A&N</text>

              <defs>
                <filter id="mapShadow" x="-5%" y="-5%" width="110%" height="110%">
                  <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#4a7a5a" floodOpacity="0.25" />
                </filter>
                <filter id="pinShadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
                </filter>
                <radialGradient id="pinGrad" cx="38%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.75" />
                </radialGradient>
              </defs>

              <text x="295" y="400" fill="#7a9a60" fontSize="20" textAnchor="middle" fontWeight="700" fontFamily="sans-serif" opacity="0.18" letterSpacing="3">INDIA</text>

              {cities.map((city, i) => {
                const isHovered = hoveredCity === city.name;
                const isSelected = selectedCity?.name === city.name;
                const active = isHovered || isSelected;
                const pinH = active ? 28 : 22;
                const pinW = active ? 19 : 15;

                return (
                  <motion.g
                    key={city.name}
                    initial={{ opacity: 0, y: -6, scale: 0.6 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, type: "spring", stiffness: 220, damping: 14 }}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedCity(isSelected ? null : city)}
                    onMouseEnter={() => { setHoveredCity(city.name); setTooltip({ city, x: city.cx, y: city.cy }); }}
                    onMouseLeave={() => { setHoveredCity(null); setTooltip(null); }}
                  >
                    {active && (
                      <motion.circle
                        cx={city.cx}
                        cy={city.cy + 2}
                        r="18"
                        fill="hsl(var(--primary) / 0.15)"
                        initial={{ scale: 0.5, opacity: 0.8 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}

                    <path
                      d={`
                        M ${city.cx} ${city.cy - pinH + 4}
                        C ${city.cx - pinW / 2} ${city.cy - pinH + 4}, ${city.cx - pinW / 2} ${city.cy - 10},
                          ${city.cx} ${city.cy}
                        C ${city.cx + pinW / 2} ${city.cy - 10}, ${city.cx + pinW / 2} ${city.cy - pinH + 4},
                          ${city.cx} ${city.cy - pinH + 4} Z
                      `}
                      fill={active ? "hsl(var(--primary))" : "url(#pinGrad)"}
                      stroke="white"
                      strokeWidth="1.5"
                      filter="url(#pinShadow)"
                    />
                    <circle
                      cx={city.cx}
                      cy={city.cy - pinH + 11}
                      r={active ? "5" : "4"}
                      fill="white"
                      opacity="0.95"
                    />

                    <rect
                      x={city.cx - 28}
                      y={city.cy - pinH - 14}
                      width="56"
                      height="13"
                      rx="6"
                      fill="white"
                      opacity={active ? "0.97" : "0.88"}
                      filter={active ? "url(#pinShadow)" : ""}
                    />
                    <text
                      x={city.cx}
                      y={city.cy - pinH - 5}
                      fill={active ? "hsl(var(--primary))" : "#2d4a1e"}
                      fontSize={active ? "7" : "6.5"}
                      fontWeight={active ? "700" : "600"}
                      textAnchor={"middle"}
                      fontFamily={'Inter, Helvetica Neue, sans-serif'}
                    >
                      {city.name}
                    </text>
                  </motion.g>
                );
              })}
            </svg>

            <AnimatePresence>
              {tooltip && !selectedCity && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-4 bg-white rounded-lg shadow-xl border border-gray-200 p-3 z-30 pointer-events-none max-w-[180px]"
                >
                  <p className="font-bold text-gray-800 text-sm">{tooltip.city.name}</p>
                  <p className="text-xs text-gray-500 mb-1.5">{tooltip.city.state}</p>
                  <div className="space-y-0.5">
                    {tooltip.city.services.slice(0, 2).map(s => (
                      <p key={s} className="text-xs text-primary font-medium">• {s}</p>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1.5">Click for full details</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="flex flex-col gap-3">
            <AnimatePresence mode="wait">
              {selectedCity ? (
                <motion.div
                  key="selected"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-xl border border-primary/30 bg-primary/5 p-5 mb-2"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{selectedCity.name}</h3>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{selectedCity.state}</span>
                    </div>
                    <button
                      onClick={() => setSelectedCity(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Available Services</p>
                  <div className="space-y-2">
                    {selectedCity.services.map(s => (
                      <div key={s} className="flex items-center gap-2.5 text-sm text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                  <a
                    href="/inquiry"
                    className="mt-5 inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 hover:bg-primary/90 transition-colors"
                  >
                    Inquire for {selectedCity.name} →
                  </a>

                  {(selectedCity.state === "Tamil Nadu") && (
                    <div className="rounded-xl overflow-hidden border border-border mt-4">
                      <iframe
                        src={`https://maps.google.com/maps?q=${selectedCity.name},+Tamil+Nadu&z=12&output=embed`}
                        width="100%"
                        height="240"
                        style={{ border: 0, display: "block" }}
                        allowFullScreen
                        loading="lazy"
                        title={`${selectedCity.name} Map`}
                      />
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="prompt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl border border-border bg-subtle/30 p-4 mb-2 text-center"
                >
                  <div className="text-2xl mb-2">🗺️</div>
                  <p className="text-sm font-semibold text-foreground">Select a city</p>
                  <p className="text-xs text-muted-foreground mt-1">Click any marker on the map to see our services in that city</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-2 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-background p-4 text-center">
                <div className="text-2xl font-bold text-primary">{cities.length}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Cities Covered</div>
              </div>
              <div className="rounded-xl border border-border bg-background p-4 text-center">
                <div className="text-2xl font-bold text-primary">+1</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Dubai Liaison</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cities.map((city) => (
            <div key={city.name} className="rounded-2xl border border-border bg-background px-4 py-4 text-center shadow-sm">
              <p className="text-sm font-semibold text-foreground">{city.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanIndiaMap;
