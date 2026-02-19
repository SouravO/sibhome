import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  Globe2,
  GraduationCap,
  Instagram,
  Lightning,
  MapPin,
  MessageCircle,
  MousePointer2,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Video,
  Zap,
} from "lucide-react";

/**
 * Single-file, creative Gen-Z Study Consultant Homepage
 * - 4 sections: Hero, "Pick Your Path", Proof/Results, Lead Capture
 * - No external UI libs required (Tailwind recommended). Falls back to basic styles if Tailwind not present.
 */

const BRAND = {
  name: "OrbitEd",
  tagline: "Study abroad, but make it you.",
  phone: "+91 90000 00000",
  whatsapp: "https://wa.me/919000000000",
  insta: "https://instagram.com/",
};

const COUNTRIES = [
  { code: "UK", name: "United Kingdom", vibe: "Fast track + global brand value" },
  { code: "US", name: "United States", vibe: "Big campuses + flexible majors" },
  { code: "CA", name: "Canada", vibe: "PR pathways + safer student cities" },
  { code: "AU", name: "Australia", vibe: "Work rights + lifestyle" },
  { code: "DE", name: "Germany", vibe: "Public uni options + engineering hub" },
  { code: "NL", name: "Netherlands", vibe: "English-taught + innovation culture" },
];

const PROGRAMS = [
  { id: "bachelors", label: "Bachelor’s", desc: "UG admissions + scholarships + visa." },
  { id: "masters", label: "Master’s", desc: "SOP polish + shortlisting + funding." },
  { id: "mba", label: "MBA", desc: "Profile strategy + essays + interview prep." },
  { id: "foundation", label: "Foundation", desc: "If marks/boards need a bridge year." },
];

const ICON_CHIPS = [
  { Icon: Sparkles, text: "Scholarship hunting" },
  { Icon: ShieldCheck, text: "Visa-ready checklist" },
  { Icon: Video, text: "Mock interviews" },
  { Icon: Globe2, text: "Country shortlisting" },
  { Icon: Zap, text: "Fast turnaround" },
];

const cx = (...a) => a.filter(Boolean).join(" ");

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const set = () => setReduced(!!mq.matches);
    set();
    mq.addEventListener?.("change", set);
    return () => mq.removeEventListener?.("change", set);
  }, []);
  return reduced;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export default function StudyConsultantHome() {
  const reducedMotion = usePrefersReducedMotion();

  // Lead capture state
  const [lead, setLead] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    country: "UK",
    program: "masters",
    intake: "Sep 2026",
    notes: "",
  });

  const [toast, setToast] = useState(null);
  const [activeCountry, setActiveCountry] = useState("UK");
  const [activeProgram, setActiveProgram] = useState("masters");
  const [score, setScore] = useState({
    gpaBand: 3, // 1-5
    budgetBand: 3,
    urgencyBand: 3,
  });

  const intakeOptions = useMemo(() => {
    // Keep it simple; user can edit
    return ["May 2026", "Sep 2026", "Jan 2027"];
  }, []);

  const country = useMemo(
    () => COUNTRIES.find((c) => c.code === activeCountry) || COUNTRIES[0],
    [activeCountry]
  );

  const program = useMemo(
    () => PROGRAMS.find((p) => p.id === activeProgram) || PROGRAMS[1],
    [activeProgram]
  );

  const fitScore = useMemo(() => {
    // playful score: weighted sum
    const raw = score.gpaBand * 0.34 + score.budgetBand * 0.33 + score.urgencyBand * 0.33;
    return Math.round((raw / 5) * 100);
  }, [score]);

  const fitLabel = useMemo(() => {
    if (fitScore >= 80) return { text: "High match", sub: "You’re in a strong zone—let’s optimize scholarships.", icon: Trophy };
    if (fitScore >= 55) return { text: "Good match", sub: "We can improve odds with smarter shortlisting.", icon: Star };
    return { text: "Needs strategy", sub: "No stress—we’ll build a plan that fits your profile + budget.", icon: ShieldCheck };
  }, [fitScore]);

  const submitLead = (e) => {
    e?.preventDefault?.();
    // Basic validation
    if (!lead.name.trim() || !lead.phone.trim()) {
      setToast({ type: "error", msg: "Add your name + phone to get a callback." });
      return;
    }
    // Simulate success
    setToast({ type: "ok", msg: "Submitted. We’ll reach out with a shortlist + timeline." });

    // Reset light
    setLead((p) => ({ ...p, notes: "" }));
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi ${BRAND.name}! I'm ${lead.name || "—"}. I want help with ${activeProgram.toUpperCase()} for ${activeCountry}. Intake: ${
        lead.intake
      }. City: ${lead.city || "—"}. Phone: ${lead.phone || "—"}.`
    );
    window.open(`${BRAND.whatsapp}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  // subtle background parallax (no libraries)
  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      document.documentElement.style.setProperty("--mx", `${x}px`);
      document.documentElement.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Inline styles so it looks decent even without Tailwind (Tailwind improves spacing/typography). */}
      <style>{`
        :root{
          --mx: 0px;
          --my: 0px;
        }
        .containerX{ max-width: 1120px; margin: 0 auto; padding: 0 16px; }
        .glass{ background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10); backdrop-filter: blur(14px); }
        .card{ border-radius: 20px; }
        .btn{
          display:inline-flex; align-items:center; justify-content:center;
          gap:10px; border-radius: 14px; padding: 12px 14px;
          font-weight: 700; letter-spacing: .2px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.08);
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
          user-select: none;
        }
        .btn:hover{ transform: translateY(-1px); background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.22); }
        .btnPrimary{
          background: linear-gradient(135deg, rgba(99,102,241,.95), rgba(236,72,153,.95));
          border: 0;
        }
        .btnPrimary:hover{ filter: brightness(1.06); transform: translateY(-1px); }
        .chip{
          display:inline-flex; align-items:center; gap:8px;
          padding: 8px 10px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.06);
          font-size: 12px;
          white-space: nowrap;
        }
        .muted{ color: rgba(255,255,255,.72); }
        .muted2{ color: rgba(255,255,255,.55); }
        .grid2{ display:grid; grid-template-columns: 1.05fr .95fr; gap: 18px; }
        .grid3{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .grid4{ display:grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .hr{ height:1px; background: rgba(255,255,255,.10); }
        .kpi{ padding: 14px; border-radius: 18px; }
        .input{
          width:100%;
          padding: 12px 12px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(0,0,0,.25);
          color: white;
          outline: none;
        }
        .input:focus{ border-color: rgba(99,102,241,.65); box-shadow: 0 0 0 3px rgba(99,102,241,.22); }
        .label{ font-size: 12px; color: rgba(255,255,255,.65); margin-bottom: 6px; display:block; }
        .heroGlow{
          position:absolute; inset:-120px;
          background:
            radial-gradient(600px 360px at 20% 20%, rgba(99,102,241,.22), transparent 60%),
            radial-gradient(540px 320px at 78% 26%, rgba(236,72,153,.20), transparent 62%),
            radial-gradient(520px 340px at 45% 78%, rgba(34,197,94,.10), transparent 62%);
          transform: translate(var(--mx), var(--my));
          transition: transform .12s linear;
          pointer-events:none;
        }
        .noise{
          position:absolute; inset:0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E");
          opacity:.22; mix-blend-mode: overlay; pointer-events:none;
        }
        .badge{
          display:inline-flex; align-items:center; gap:8px;
          border-radius: 999px; padding: 8px 10px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.06);
          font-size: 12px;
        }
        .pulseDot{
          width:8px; height:8px; border-radius:999px; background: rgba(34,197,94,.9);
          box-shadow: 0 0 0 0 rgba(34,197,94,.55);
          animation: pulse 1.8s infinite;
        }
        @keyframes pulse{
          0%{ box-shadow: 0 0 0 0 rgba(34,197,94,.55); }
          70%{ box-shadow: 0 0 0 10px rgba(34,197,94,0); }
          100%{ box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        .tilt{
          transform: translateZ(0);
        }
        .shadowSoft{
          box-shadow: 0 24px 80px rgba(0,0,0,.55);
        }
        .stickyTop{
          position: sticky; top: 0; z-index: 50;
          backdrop-filter: blur(16px);
          background: rgba(8,8,10,.55);
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .link{ color: rgba(255,255,255,.82); }
        .link:hover{ color: white; }
        @media (max-width: 980px){
          .grid2{ grid-template-columns: 1fr; }
          .grid4{ grid-template-columns: repeat(2, 1fr); }
          .grid3{ grid-template-columns: 1fr; }
        }
        @media (max-width: 520px){
          .grid4{ grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Top bar */}
      <div className="stickyTop">
        <div className="containerX" style={{ paddingTop: 12, paddingBottom: 12, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="glass card" style={{ width: 40, height: 40, display: "grid", placeItems: "center" }}>
              <GraduationCap size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 900, letterSpacing: ".2px" }}>{BRAND.name}</div>
              <div className="muted2" style={{ fontSize: 12 }}>Gen-Z admissions + visas + scholarships</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a className="btn" href="#quiz" style={{ textDecoration: "none" }}>
              <Search size={18} /> Find my best-fit
            </a>
            <button className="btn btnPrimary" onClick={openWhatsApp}>
              <MessageCircle size={18} /> WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1 — HERO */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="heroGlow" />
        <div className="noise" />
        <div className="containerX" style={{ paddingTop: 44, paddingBottom: 28, position: "relative" }}>
          <div className="grid2">
            <div className="tilt">
              <div className="badge" style={{ marginBottom: 14 }}>
                <span className="pulseDot" />
                <span>Admissions season mode: ON</span>
                <span className="muted2">• shortlists in 24–48 hrs</span>
              </div>

              <h1 style={{ fontSize: 48, lineHeight: 1.02, margin: 0, fontWeight: 950, letterSpacing: "-.8px" }}>
                Your abroad plan, <span style={{ background: "linear-gradient(135deg, #a5b4fc, #f472b6)", WebkitBackgroundClip: "text", color: "transparent" }}>without the chaos.</span>
              </h1>

              <p className="muted" style={{ marginTop: 14, fontSize: 16, lineHeight: 1.6, maxWidth: 560 }}>
                OrbitEd is the “one tab” admissions squad: country + course shortlisting, scholarship strategy, SOP glow-up, and visa-ready checklists—built for Gen-Z speed.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                {ICON_CHIPS.map(({ Icon, text }, i) => (
                  <span key={i} className="chip">
                    <Icon size={16} /> {text}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
                <a className="btn btnPrimary" href="#apply" style={{ textDecoration: "none" }}>
                  Get a callback <ArrowRight size={18} />
                </a>
                <a className="btn" href="#proof" style={{ textDecoration: "none" }}>
                  See results <ChevronDown size={18} />
                </a>
              </div>

              <div className="muted2" style={{ marginTop: 12, fontSize: 12, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <BadgeCheck size={16} /> Transparent pricing
                </span>
                <span style={{ opacity: 0.55 }}>•</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <ShieldCheck size={16} /> Document-first process
                </span>
                <span style={{ opacity: 0.55 }}>•</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <Lightning size={16} /> Fast timelines
                </span>
              </div>
            </div>

            {/* Hero interactive card */}
            <div className="glass card shadowSoft" style={{ padding: 18, position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 14, letterSpacing: ".2px" }}>Today’s shortlist drop</div>
                  <div className="muted2" style={{ fontSize: 12, marginTop: 4 }}>
                    Pick a country + program to preview your vibe.
                  </div>
                </div>
                <div className="chip">
                  <MousePointer2 size={16} />
                  Tap options
                </div>
              </div>

              <div className="hr" style={{ margin: "14px 0" }} />

              <div className="grid2" style={{ gap: 12 }}>
                <div>
                  <div className="label">Country</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {COUNTRIES.slice(0, 4).map((c) => (
                      <button
                        key={c.code}
                        className="btn"
                        onClick={() => {
                          setActiveCountry(c.code);
                          setLead((p) => ({ ...p, country: c.code }));
                        }}
                        style={{
                          padding: "10px 12px",
                          background:
                            activeCountry === c.code
                              ? "linear-gradient(135deg, rgba(99,102,241,.55), rgba(236,72,153,.45))"
                              : undefined,
                          borderColor: activeCountry === c.code ? "rgba(255,255,255,.26)" : undefined,
                        }}
                      >
                        <Globe2 size={16} /> {c.code}
                      </button>
                    ))}
                  </div>
                  <div className="muted" style={{ marginTop: 10, fontSize: 13, lineHeight: 1.5 }}>
                    <span style={{ fontWeight: 800, color: "white" }}>{country.name}:</span> {country.vibe}
                  </div>
                </div>

                <div>
                  <div className="label">Program</div>
                  <div style={{ display: "grid", gap: 8 }}>
                    {PROGRAMS.map((p) => (
                      <button
                        key={p.id}
                        className="btn"
                        onClick={() => {
                          setActiveProgram(p.id);
                          setLead((x) => ({ ...x, program: p.id }));
                        }}
                        style={{
                          justifyContent: "space-between",
                          background:
                            activeProgram === p.id
                              ? "linear-gradient(135deg, rgba(34,197,94,.22), rgba(99,102,241,.22))"
                              : undefined,
                          borderColor: activeProgram === p.id ? "rgba(255,255,255,.22)" : undefined,
                        }}
                      >
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                          <GraduationCap size={16} />
                          {p.label}
                        </span>
                        <ArrowRight size={16} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hr" style={{ margin: "14px 0" }} />

              <div style={{ display: "grid", gap: 10 }}>
                <div className="glass kpi" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 13 }}>Your “fit score” preview</div>
                    <div className="muted2" style={{ fontSize: 12, marginTop: 3 }}>
                      Just a vibe-check. We do the real analysis on call.
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 26, fontWeight: 950, letterSpacing: "-.6px" }}>{fitScore}%</div>
                    <div className="muted2" style={{ fontSize: 12, marginTop: -2 }}>{fitLabel.text}</div>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 10 }}>
                  <Slider
                    label="Academics"
                    left="Okay"
                    right="Strong"
                    value={score.gpaBand}
                    onChange={(v) => setScore((p) => ({ ...p, gpaBand: v }))}
                  />
                  <Slider
                    label="Budget"
                    left="Tight"
                    right="Flexible"
                    value={score.budgetBand}
                    onChange={(v) => setScore((p) => ({ ...p, budgetBand: v }))}
                  />
                  <Slider
                    label="Urgency"
                    left="Chill"
                    right="ASAP"
                    value={score.urgencyBand}
                    onChange={(v) => setScore((p) => ({ ...p, urgencyBand: v }))}
                  />
                </div>

                <div className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>
                  <fitLabel.icon size={16} style={{ display: "inline", marginRight: 8, verticalAlign: "-3px" }} />
                  {fitLabel.sub}
                </div>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a className="btn btnPrimary" href="#apply" style={{ textDecoration: "none", flex: 1, minWidth: 220 }}>
                    Get my shortlist <ArrowRight size={18} />
                  </a>
                  <button className="btn" onClick={openWhatsApp} style={{ flex: 1, minWidth: 220 }}>
                    WhatsApp now <MessageCircle size={18} />
                  </button>
                </div>
              </div>

              <div className="muted2" style={{ marginTop: 10, fontSize: 11 }}>
                *No spam. No random “agent pressure”. Just clarity + a plan.
              </div>
            </div>
          </div>

          <div style={{ marginTop: 22, display: "flex", justifyContent: "center" }}>
            <a href="#quiz" className="muted2 link" style={{ textDecoration: "none", display: "inline-flex", gap: 8, alignItems: "center" }}>
              Scroll for the 60-sec quiz <ChevronDown size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PICK YOUR PATH / QUIZ */}
      <section id="quiz" style={{ padding: "30px 0" }}>
        <div className="containerX">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
            <div>
              <div className="badge">
                <Sparkles size={16} />
                <span>Section 2</span>
              </div>
              <h2 style={{ margin: "10px 0 0", fontSize: 34, letterSpacing: "-.6px", fontWeight: 950 }}>
                Pick your path. We’ll do the hard part.
              </h2>
              <p className="muted" style={{ marginTop: 8, maxWidth: 720, lineHeight: 1.6 }}>
                Gen-Z friendly process: swipe-like options → instant clarity → we build the shortlist + scholarship strategy + visa timeline.
              </p>
            </div>
            <div className="chip">
              <CalendarDays size={16} />
              Next callback slots: Today
            </div>
          </div>

          <div className="grid3" style={{ marginTop: 16 }}>
            <PathCard
              icon={<Search size={18} />}
              title="Shortlist in 48 hrs"
              desc="Top universities + realistic admit chances + backup plan."
              bullets={["Country + course matching", "Intake-ready timeline", "Budget mapping"]}
            />
            <PathCard
              icon={<Sparkles size={18} />}
              title="SOP + Profile glow-up"
              desc="Make your story feel human, not robotic."
              bullets={["SOP structure + edits", "LOR pointers", "Portfolio / projects framing"]}
            />
            <PathCard
              icon={<ShieldCheck size={18} />}
              title="Visa-ready checklist"
              desc="Docs, finances, appointment prep—no surprises."
              bullets={["Document tracker", "Mock interview", "Visa file review"]}
            />
          </div>

          <div className="glass card" style={{ marginTop: 14, padding: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 950, letterSpacing: ".2px" }}>Quick preference</div>
                <div className="muted2" style={{ fontSize: 12, marginTop: 4 }}>
                  Choose what matters most—so we tailor the shortlist.
                </div>
              </div>
              <div className="muted2" style={{ fontSize: 12, display: "inline-flex", alignItems: "center", gap: 8 }}>
                <MapPin size={16} /> Bengaluru-friendly support (online works too)
              </div>
            </div>

            <div className="grid4" style={{ marginTop: 12 }}>
              <TagToggle label="Max scholarship" />
              <TagToggle label="PR-friendly options" />
              <TagToggle label="Top-ranked unis" />
              <TagToggle label="Lowest tuition" />
              <TagToggle label="Work rights" />
              <TagToggle label="STEM focus" />
              <TagToggle label="Creative courses" />
              <TagToggle label="Fast visa timeline" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROOF / RESULTS */}
      <section id="proof" style={{ padding: "30px 0" }}>
        <div className="containerX">
          <div className="glass card" style={{ padding: 18, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: -120, background: "radial-gradient(520px 320px at 20% 20%, rgba(34,197,94,.14), transparent 60%), radial-gradient(520px 320px at 80% 30%, rgba(99,102,241,.16), transparent 60%)" }} />
            <div style={{ position: "relative" }}>
              <div className="badge">
                <Trophy size={16} />
                <span>Section 3</span>
              </div>

              <div className="grid2" style={{ marginTop: 12 }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 30, fontWeight: 950, letterSpacing: "-.6px" }}>
                    Proof that feels real (not brochure-fake).
                  </h3>
                  <p className="muted" style={{ marginTop: 8, lineHeight: 1.6 }}>
                    We track everything like a product: shortlists, application status, edits, and visa steps—so you’re never “guessing”.
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
                    <KPI icon={<BadgeCheck size={18} />} value="4.8/5" label="Student rating" sub="based on feedback calls" />
                    <KPI icon={<Lightning size={18} />} value="48 hrs" label="Shortlist time" sub="typical turnaround" />
                    <KPI icon={<ShieldCheck size={18} />} value="1 file" label="Doc tracker" sub="visa-ready checklist" />
                  </div>

                  <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <a className="btn btnPrimary" href="#apply" style={{ textDecoration: "none" }}>
                      Start my plan <ArrowRight size={18} />
                    </a>
                    <a className="btn" href={BRAND.insta} target="_blank" rel="noreferrer">
                      <Instagram size={18} /> Student stories
                    </a>
                  </div>
                </div>

                <div style={{ display: "grid", gap: 12 }}>
                  <MiniTestimonial
                    name="Ayesha"
                    meta="MS • Canada • Sep intake"
                    quote="They didn’t just ‘apply’. They fixed my shortlist and made my SOP sound like me."
                    tag="Scholarship strategy"
                  />
                  <MiniTestimonial
                    name="Rohit"
                    meta="UG • UK • Jan intake"
                    quote="The checklist saved me. I knew exactly what to do every week."
                    tag="Visa-ready timeline"
                  />
                  <MiniTestimonial
                    name="Nandini"
                    meta="MBA • USA • Sep intake"
                    quote="Mock interviews were 🔥. I walked in calm."
                    tag="Interview prep"
                  />
                </div>
              </div>

              <div className="hr" style={{ margin: "16px 0" }} />

              <div className="grid3">
                <ProcessStep
                  icon={<Search size={18} />}
                  title="1) Profile scan"
                  desc="Marks, budget, goals → realistic shortlist buckets."
                />
                <ProcessStep
                  icon={<Sparkles size={18} />}
                  title="2) Application sprint"
                  desc="SOP edits, LOR pointers, portal submissions."
                />
                <ProcessStep
                  icon={<ShieldCheck size={18} />}
                  title="3) Visa-ready"
                  desc="Docs, finance structuring, appointment prep."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — LEAD CAPTURE */}
      <section id="apply" style={{ padding: "30px 0 54px" }}>
        <div className="containerX">
          <div className="badge">
            <MessageCircle size={16} />
            <span>Section 4</span>
          </div>
          <h2 style={{ margin: "10px 0 0", fontSize: 34, fontWeight: 950, letterSpacing: "-.6px" }}>
            Get your shortlist + timeline (free callback)
          </h2>
          <p className="muted" style={{ marginTop: 8, lineHeight: 1.6, maxWidth: 820 }}>
            Drop your basics. We’ll reply with: (1) 3-bucket shortlist, (2) scholarship angle, (3) doc + visa timeline.
          </p>

          <div className="grid2" style={{ marginTop: 14 }}>
            <form className="glass card" onSubmit={submitLead} style={{ padding: 16 }}>
              <div className="grid2" style={{ gap: 12 }}>
                <div>
                  <label className="label">Full name</label>
                  <input
                    className="input"
                    value={lead.name}
                    onChange={(e) => setLead((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="label">Phone (WhatsApp)</label>
                  <input
                    className="input"
                    value={lead.phone}
                    onChange={(e) => setLead((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="+91 ..."
                  />
                </div>
              </div>

              <div className="grid2" style={{ gap: 12, marginTop: 12 }}>
                <div>
                  <label className="label">Email (optional)</label>
                  <input
                    className="input"
                    value={lead.email}
                    onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="label">City</label>
                  <input
                    className="input"
                    value={lead.city}
                    onChange={(e) => setLead((p) => ({ ...p, city: e.target.value }))}
                    placeholder="Bengaluru"
                  />
                </div>
              </div>

              <div className="grid2" style={{ gap: 12, marginTop: 12 }}>
                <div>
                  <label className="label">Country</label>
                  <select
                    className="input"
                    value={lead.country}
                    onChange={(e) => {
                      setLead((p) => ({ ...p, country: e.target.value }));
                      setActiveCountry(e.target.value);
                    }}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">Program</label>
                  <select
                    className="input"
                    value={lead.program}
                    onChange={(e) => {
                      setLead((p) => ({ ...p, program: e.target.value }));
                      setActiveProgram(e.target.value);
                    }}
                  >
                    {PROGRAMS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid2" style={{ gap: 12, marginTop: 12 }}>
                <div>
                  <label className="label">Intake</label>
                  <select className="input" value={lead.intake} onChange={(e) => setLead((p) => ({ ...p, intake: e.target.value }))}>
                    {intakeOptions.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">Notes (course / budget / goals)</label>
                  <input
                    className="input"
                    value={lead.notes}
                    onChange={(e) => setLead((p) => ({ ...p, notes: e.target.value }))}
                    placeholder="e.g., MS Data Science, budget 15L, scholarship focus"
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <button type="submit" className="btn btnPrimary" style={{ flex: 1, minWidth: 220 }}>
                  Submit <ArrowRight size={18} />
                </button>
                <button type="button" className="btn" onClick={openWhatsApp} style={{ flex: 1, minWidth: 220 }}>
                  WhatsApp instead <MessageCircle size={18} />
                </button>
              </div>

              <div className="muted2" style={{ marginTop: 10, fontSize: 11 }}>
                By submitting, you agree to be contacted for admissions support. No spam.
              </div>
            </form>

            <div style={{ display: "grid", gap: 12 }}>
              <div className="glass card" style={{ padding: 16 }}>
                <div style={{ fontWeight: 950, fontSize: 14, letterSpacing: ".2px" }}>What you get in the callback</div>
                <div className="muted2" style={{ fontSize: 12, marginTop: 6 }}>
                  15–20 minutes. Clear plan. Next steps.
                </div>

                <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                  <ChecklistRow icon={<Search size={18} />} title="3-bucket shortlist" desc="Dream / realistic / safe." />
                  <ChecklistRow icon={<Sparkles size={18} />} title="Scholarship angle" desc="Where you can actually win." />
                  <ChecklistRow icon={<ShieldCheck size={18} />} title="Visa + docs timeline" desc="Week-by-week clarity." />
                </div>

                <div className="hr" style={{ margin: "14px 0" }} />

                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <div className="chip">
                    <MapPin size={16} /> India + global support
                  </div>
                  <div className="chip">
                    <CalendarDays size={16} /> Flexible slots
                  </div>
                  <div className="chip">
                    <ShieldCheck size={16} /> Process-first
                  </div>
                </div>
              </div>

              <div className="glass card" style={{ padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 950, fontSize: 14 }}>Need it faster?</div>
                    <div className="muted2" style={{ fontSize: 12, marginTop: 4 }}>DM “SHORTLIST” and we start.</div>
                  </div>
                  <button className="btn btnPrimary" onClick={openWhatsApp}>
                    <MessageCircle size={18} /> DM now
                  </button>
                </div>
              </div>

              <div className="muted2" style={{ fontSize: 12, display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                  <ShieldCheck size={16} /> Privacy-first
                </span>
                <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                  <Globe2 size={16} /> Multi-country strategy
                </span>
                <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                  <Zap size={16} /> Gen-Z speed
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <div className="muted2" style={{ fontSize: 12 }}>
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <a className="link muted2" href={BRAND.insta} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "inline-flex", gap: 8, alignItems: "center" }}>
                <Instagram size={16} /> Instagram
              </a>
              <a className="link muted2" href={BRAND.whatsapp} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "inline-flex", gap: 8, alignItems: "center" }}>
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 16,
            left: 16,
            right: 16,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 999,
          }}
        >
          <div
            className="glass card"
            style={{
              padding: "12px 14px",
              maxWidth: 560,
              width: "100%",
              borderColor: toast.type === "error" ? "rgba(239,68,68,.45)" : "rgba(34,197,94,.35)",
              background:
                toast.type === "error"
                  ? "linear-gradient(135deg, rgba(239,68,68,.18), rgba(255,255,255,.06))"
                  : "linear-gradient(135deg, rgba(34,197,94,.14), rgba(255,255,255,.06))",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {toast.type === "error" ? <ShieldCheck size={18} /> : <BadgeCheck size={18} />}
              <div style={{ fontWeight: 800 }}>{toast.msg}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Slider({ label, left, right, value, onChange }) {
  return (
    <div className="glass card" style={{ padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
        <div style={{ fontWeight: 900, fontSize: 13 }}>{label}</div>
        <div className="muted2" style={{ fontSize: 12 }}>
          {left} → {right}
        </div>
      </div>
      <input
        type="range"
        min={1}
        max={5}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        style={{ width: "100%", marginTop: 10 }}
      />
    </div>
  );
}

function PathCard({ icon, title, desc, bullets }) {
  return (
    <div className="glass card" style={{ padding: 16 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div className="glass card" style={{ width: 40, height: 40, display: "grid", placeItems: "center" }}>
          {icon}
        </div>
        <div style={{ fontWeight: 950, letterSpacing: ".2px" }}>{title}</div>
      </div>
      <div className="muted" style={{ marginTop: 8, lineHeight: 1.6 }}>
        {desc}
      </div>
      <ul className="muted2" style={{ marginTop: 10, paddingLeft: 18, lineHeight: 1.7 }}>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div style={{ marginTop: 12 }}>
        <a className="link" href="#apply" style={{ textDecoration: "none", display: "inline-flex", gap: 8, alignItems: "center", fontWeight: 800 }}>
          Start here <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

function KPI({ icon, value, label, sub }) {
  return (
    <div className="glass kpi" style={{ minWidth: 170 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div className="glass card" style={{ width: 36, height: 36, display: "grid", placeItems: "center" }}>
          {icon}
        </div>
        <div>
          <div style={{ fontWeight: 950, fontSize: 18 }}>{value}</div>
          <div className="muted2" style={{ fontSize: 12 }}>
            {label}
          </div>
        </div>
      </div>
      <div className="muted2" style={{ fontSize: 11, marginTop: 10 }}>
        {sub}
      </div>
    </div>
  );
}

function MiniTestimonial({ name, meta, quote, tag }) {
  return (
    <div className="glass card" style={{ padding: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 950 }}>{name}</div>
          <div className="muted2" style={{ fontSize: 12, marginTop: 2 }}>
            {meta}
          </div>
        </div>
        <div className="chip">
          <Star size={16} /> {tag}
        </div>
      </div>
      <div className="muted" style={{ marginTop: 10, lineHeight: 1.6 }}>
        “{quote}”
      </div>
    </div>
  );
}

function ProcessStep({ icon, title, desc }) {
  return (
    <div className="glass card" style={{ padding: 14 }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div className="glass card" style={{ width: 40, height: 40, display: "grid", placeItems: "center" }}>
          {icon}
        </div>
        <div style={{ fontWeight: 950 }}>{title}</div>
      </div>
      <div className="muted" style={{ marginTop: 8, lineHeight: 1.6 }}>
        {desc}
      </div>
    </div>
  );
}

function ChecklistRow({ icon, title, desc }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <div className="glass card" style={{ width: 38, height: 38, display: "grid", placeItems: "center", flex: "0 0 auto" }}>
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 950 }}>{title}</div>
        <div className="muted2" style={{ fontSize: 12, marginTop: 2, lineHeight: 1.5 }}>
          {desc}
        </div>
      </div>
    </div>
  );
}

function TagToggle({ label }) {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className="btn"
      style={{
        justifyContent: "space-between",
        padding: "10px 12px",
        background: on ? "linear-gradient(135deg, rgba(99,102,241,.22), rgba(236,72,153,.16))" : undefined,
        borderColor: on ? "rgba(255,255,255,.22)" : undefined,
      }}
    >
      <span style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
        {on ? <BadgeCheck size={16} /> : <ChevronDown size={16} />}
        {label}
      </span>
      <ArrowRight size={16} />
    </button>
  );
}
