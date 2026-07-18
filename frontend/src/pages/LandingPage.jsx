import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Phone,
  MessageCircle,
  Sparkles,
  Star,
  Shield,
  Clock,
  Award,
  Play,
  Home,
  Camera,
  Lock,
  Zap,
  ChevronRight,
  Send,
  MapPin,
  Volume2
} from "lucide-react";
import { Button } from "../components/ui/button";

const PHONE = "+91-7204746043";
const WHATSAPP = "https://wa.me/917204746043?text=Hi,%20I%27m%20interested%20in%20a%20home%20theatre%20consultation.";
const HERO_IMG =
  "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/x2ao5one_luxury-movie-theater-with-modern-design-lighting-generated-by-ai_188544-33089.avif";

const PACKAGES = [
  {
    name: "Essential",
    price: "₹2,29,000",
    tagline: "Entry into cinema quality",
    features: [
      "5.1 speaker system + subwoofer",
      "AVR + 4K upscaling projector",
      "HDMI cables + projector mount",
      "Professional installation"
    ],
    popular: false,
    cta: "Get Essential Quote"
  },
  {
    name: "Budget",
    price: "₹6,99,000",
    tagline: "High-end speakers + acoustics",
    features: [
      "High-end 5.1 speaker system",
      "Basic acoustic wall paneling",
      "AVR + 4K projector setup",
      "5-year warranty on speakers"
    ],
    popular: false,
    cta: "Get Budget Quote"
  },
  {
    name: "Silver",
    price: "₹9,99,000",
    tagline: "5.1.2 Dolby Atmos setup",
    features: [
      "5.1.2 Dolby Atmos system",
      "4K projector + edge-less screen",
      "4-layer acoustic treatment",
      "Cinema recliners included"
    ],
    popular: true,
    cta: "Get Silver Quote"
  },
  {
    name: "Gold",
    price: "₹12,39,000",
    tagline: "Ultimate 7.1.2 luxury",
    features: [
      "7.1.2 Dolby Atmos system",
      "300W premium speakers",
      "6-layer acoustic treatment",
      "Premium recliners + starlight ceiling"
    ],
    popular: false,
    cta: "Get Gold Quote"
  }
];

const GALLERY = [
  {
    src: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/rxbr16ev_3f53009e-1b0b-4acf-853c-64bdafa7f505.JPG",
    label: "7.1.2 Dolby Atmos Theatre",
    config: "Whitefield Villa"
  },
  {
    src: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/eglex7eg_7c3ac259-d705-4d0f-b6c6-cbba791d580f.JPG",
    label: "Dedicated Cinema Room",
    config: "Gold Package · Koramangala"
  },
  {
    src: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/yzqwcagp_8e20a366-093c-4b22-84af-0e64382c047c.JPG",
    label: "4K Projector Setup",
    config: "Silver Package · HSR Layout"
  },
  {
    src: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/u0j3l0gh_060a9a8a-0cf4-4dec-b559-d3fc24928ccc.JPG",
    label: "Acoustic-Treated Theatre",
    config: "6-Layer Acoustics"
  },
  {
    src: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/diawcire_98ff289b-206b-4109-bc93-b20ff099aaee.JPG",
    label: "5.1.2 Atmos Configuration",
    config: "Indiranagar Villa"
  },
  {
    src: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/170qqqsz_2368418d-b426-4c6e-9ab1-c46d0a54c815%202.JPG",
    label: "Premium Recliner Theatre",
    config: "Gold Package · Sarjapur"
  },
  {
    src: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/kheqwtbv_a9c61c26-9b2d-4534-bc56-0a3a8d82ab3d.JPG",
    label: "Custom Cinema Room",
    config: "JP Nagar Villa"
  },
  {
    src: "https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/wm8df44x_c7ed42f0-a87d-405c-8132-2199f4e5c8fe.JPG",
    label: "Edge-less Screen Setup",
    config: "Silver Package · Electronic City"
  }
];

const OTHER_SERVICES = [
  {
    icon: Home,
    name: "Smart Home Automation",
    desc: "Voice + app control for lights, climate, curtains & appliances",
    link: "/services/home-automation"
  },
  {
    icon: Camera,
    name: "CCTV & Security",
    desc: "HD/4K cameras, motion sensors & 24/7 cloud monitoring",
    link: "/services/security-systems"
  },
  {
    icon: Lock,
    name: "Digital Door Locks",
    desc: "Keyless entry with fingerprint, PIN & smartphone access",
    link: "/services/digital-door-locks"
  },
  {
    icon: Zap,
    name: "Smart Switches",
    desc: "Touch-panel switches with scene control & voice integration",
    link: "/services/smart-switches"
  }
];

const BRANDS = [
  "JBL", "Denon", "Yamaha", "Sony", "Epson", "BenQ", "KEF", "Focal", "Marantz", "Klipsch"
];

const TESTIMONIALS = [
  {
    name: "Pallav Godeswar",
    area: "Whitefield, Bangalore",
    text: "Custom home theatre delivered exactly what I envisioned. Feels like a mini-cinema at home. The Dolby Atmos setup is incredible."
  },
  {
    name: "Anusha S.",
    area: "Koramangala, Bangalore",
    text: "Professional team, delivered on time. Acoustic treatment made a huge difference. Highly recommend Qloud Tech."
  },
  {
    name: "Arun M.",
    area: "Mysuru",
    text: "Travelled all the way to Mysuru and delivered a stunning 7.1.2 Atmos setup. Truly theatre-quality. Worth every rupee."
  }
];

const FAQS = [
  {
    q: "How much space do I need for a home theatre?",
    a: "A minimum of 150 sq ft works well; 200–400 sq ft is ideal for 7.1.2 Atmos with recliners. We design solutions for any room."
  },
  {
    q: "How long does installation take?",
    a: "Essential Package: 2–3 days. Silver/Gold with full acoustic treatment: 15+ days for design, panelling, wiring, calibration and final QA. We share a day-wise timeline before starting."
  },
  {
    q: "What warranty do I get?",
    a: "5-year warranty on speakers, 2-year on projectors, 1-year on all accessories. Plus lifetime free technical support."
  },
  {
    q: "Do you serve areas outside Bangalore?",
    a: "Yes — we serve all of Karnataka including Mysuru, Mangalore, Hubballi–Dharwad, Belgavi, Udupi, Manipal, Shivamogga, Davangere, Tumakuru and beyond. We've also delivered projects in Hyderabad, Chennai and Goa. Free consultation across Karnataka; nominal travel charges outside the state."
  }
];

// Sticky floating mobile CTA bar
const MobileCTABar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0a0e1a]/95 backdrop-blur-md border-t border-cyan-500/20 p-3 flex gap-2 shadow-2xl">
    <a
      href={`tel:${PHONE}`}
      className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-cyan-500/40 text-cyan-300 font-semibold py-3 rounded-lg"
      data-testid="lp-mobile-call"
    >
      <Phone className="w-4 h-4" /> Call
    </a>
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-black font-semibold py-3 rounded-lg"
      data-testid="lp-mobile-whatsapp"
    >
      <MessageCircle className="w-4 h-4" /> WhatsApp
    </a>
    <a
      href="#quote-form"
      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold py-3 rounded-lg"
      data-testid="lp-mobile-quote"
    >
      Get Quote
    </a>
  </div>
);

// Compact top bar (no full nav — landing page = single-purpose)
const MiniHeader = () => (
  <header className="sticky top-0 z-40 bg-[#0a0e1a]/85 backdrop-blur-md border-b border-white/5">
    <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
      <Link to="/" className="flex-shrink-0" aria-label="Qloud Tech Home">
        <img
          src="https://customer-assets.emergentagent.com/job_bbd75f07-b85c-4326-830b-0e6f04e9a467/artifacts/mnksn56d_cropped-logo-1.png"
          alt="Qloud Tech"
          className="h-5 brightness-0 invert"
        />
      </Link>
      <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
        Bangalore &amp; Karnataka
        <span className="mx-2 text-gray-600">·</span>
        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
        5 / 5 (450+ reviews)
      </div>
      <div className="flex items-center gap-2">
        <a
          href={`tel:${PHONE}`}
          className="hidden sm:inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 font-medium"
          data-testid="lp-header-call"
        >
          <Phone className="w-4 h-4" /> {PHONE.replace("+91-", "+91 ")}
        </a>
        <a
          href="#quote-form"
          className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-semibold text-sm px-4 py-2 rounded-lg hover:opacity-90 transition"
          data-testid="lp-header-cta"
        >
          Free Quote <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </header>
);

// Lead form (mailto-based — captures leads to inbox with no backend)
const QuoteForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    package: "Silver",
    budget: "₹6L – ₹10L",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Fire GA4 conversion event for lead form submit
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        method: "quote_form",
        event_category: "engagement",
        event_label: form.package,
        value: 1
      });
    }

    // Build a pre-filled WhatsApp message (works without a backend)
    const msg = encodeURIComponent(
      `Hi Qloud Tech,\n\nI'd like a free home theatre quote.\n\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Area: ${form.area}\n• Interested in: ${form.package} Package\n• Budget: ${form.budget}\n• Notes: ${form.message || "N/A"}`
    );
    window.open(`https://wa.me/917204746043?text=${msg}`, "_blank");
    setTimeout(() => setSubmitting(false), 1200);
  };

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <form
      onSubmit={handleSubmit}
      id="quote-form"
      className="bg-gradient-to-br from-[#0a0e1a] to-[#0f1723] border border-cyan-500/20 rounded-2xl p-6 md:p-8 shadow-2xl shadow-cyan-500/5"
      data-testid="lp-quote-form"
    >
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Free Consultation
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          Get a personalised quote in 60 seconds
        </h3>
        <p className="text-sm text-gray-400 mt-2">
          Tell us about your space. Our expert will call you back within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          required
          placeholder="Your Name *"
          value={form.name}
          onChange={update("name")}
          className="bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-gray-500 transition"
          data-testid="lp-form-name"
        />
        <input
          required
          type="tel"
          pattern="[0-9+ ]{10,15}"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={update("phone")}
          className="bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-gray-500 transition"
          data-testid="lp-form-phone"
        />
        <input
          placeholder="Area (e.g. Whitefield)"
          value={form.area}
          onChange={update("area")}
          className="bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-gray-500 transition"
          data-testid="lp-form-area"
        />
        <select
          value={form.package}
          onChange={update("package")}
          className="bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-lg px-4 py-3 text-white transition"
          data-testid="lp-form-package"
        >
          <option>Essential (₹2.29L)</option>
          <option>Budget (₹6.99L)</option>
          <option>Silver (₹9.99L)</option>
          <option>Gold (₹12.39L)</option>
          <option>Not sure — recommend one</option>
        </select>
        <select
          value={form.budget}
          onChange={update("budget")}
          className="bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-lg px-4 py-3 text-white transition md:col-span-2"
          data-testid="lp-form-budget"
        >
          <option>Under ₹3L</option>
          <option>₹3L – ₹6L</option>
          <option>₹6L – ₹10L</option>
          <option>₹10L – ₹15L</option>
          <option>₹15L+</option>
        </select>
        <textarea
          rows={3}
          placeholder="Anything specific? (optional)"
          value={form.message}
          onChange={update("message")}
          className="bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none rounded-lg px-4 py-3 text-white placeholder-gray-500 transition md:col-span-2 resize-none"
          data-testid="lp-form-message"
        />
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="w-full mt-4 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] hover:opacity-90 text-black font-bold py-4 rounded-lg text-base transition"
        data-testid="lp-form-submit"
      >
        {submitting ? "Sending…" : (
          <span className="inline-flex items-center gap-2">
            <Send className="w-4 h-4" /> Get My Free Quote
          </span>
        )}
      </Button>

      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1"><Shield className="w-3 h-3" /> No spam</span>
        <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> Reply in 24h</span>
        <span className="inline-flex items-center gap-1"><Award className="w-3 h-3" /> Free site visit</span>
      </div>
    </form>
  );
};

export default function LandingPage() {
  useEffect(() => {
    document.title =
      "Dedicated Home Theatre Installation Bangalore & Karnataka | Dolby Atmos from ₹2.29L | Qloud Tech";
    // Preload hero image
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = HERO_IMG;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white antialiased">
      <MiniHeader />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Dedicated Dolby Atmos home theatre installation in Bangalore"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0a0e1a]/70 to-[#0a0e1a]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_60%)]" />
        </div>

        <div className="relative container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Bangalore&apos;s #1 Home Theatre Specialists
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                Build your{" "}
                <span className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] bg-clip-text text-transparent">
                  dedicated home theatre
                </span>{" "}
                in Bangalore
              </h1>

              <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
                Purpose-built cinema rooms with Dolby Atmos, 4K projection, acoustic
                treatment and premium recliners. Serving Bangalore &amp; all of Karnataka
                — Mysuru, Mangalore, Hubballi, Belgavi, Udupi &amp; beyond. Packages from{" "}
                <span className="text-cyan-300 font-semibold">₹2.29 Lakhs</span>. Free
                on-site consultation. 5-year warranty. Lifetime support.
              </p>

              {/* Trust chips */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-sm">
                {[
                  { icon: Award, label: "100+ theatres built" },
                  { icon: Star, label: "5★ (450+ reviews)" },
                  { icon: Shield, label: "5-year warranty" },
                  { icon: Clock, label: "8+ years experience" }
                ].map((c, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300"
                  >
                    <c.icon className="w-3.5 h-3.5 text-cyan-400" /> {c.label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-bold text-base px-6 py-4 rounded-xl hover:scale-[1.02] transition"
                  data-testid="lp-hero-quote"
                >
                  Get Free Quote <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-cyan-400/30 text-cyan-200 font-semibold px-6 py-4 rounded-xl hover:bg-white/10 transition"
                  data-testid="lp-hero-whatsapp"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                📞 Call <a href={`tel:${PHONE}`} className="text-cyan-300 font-semibold">{PHONE.replace("+91-", "+91 ")}</a>
                <span className="mx-2 text-gray-600">·</span>
                Open Mon–Sat 9am–7pm
              </div>
            </div>

            {/* Right: quote form */}
            <div className="lg:pl-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS STRIP ═══════════════ */}
      <section className="border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-4 md:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "100+", l: "Home Theatres Delivered" },
            { v: "450+", l: "Happy Customers" },
            { v: "8+", l: "Years of Experience" },
            { v: "5★", l: "Average Rating" }
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] bg-clip-text text-transparent">
                {s.v}
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wider">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ PACKAGES ═══════════════ */}
      <section className="py-20 md:py-24 bg-[#0f1419]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">
              Transparent Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Home Theatre Packages{" "}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] bg-clip-text text-transparent">
                Built for Karnataka Homes
              </span>
            </h2>
            <p className="text-gray-400 mt-4">
              Four packages, one goal: dedicated cinema-quality theatres tailored to your budget.
              All prices include design, supply, installation and calibration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGES.map((p, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-6 border transition-all hover:scale-[1.02] ${
                  p.popular
                    ? "bg-gradient-to-b from-cyan-500/10 to-transparent border-cyan-400/50 shadow-xl shadow-cyan-500/10"
                    : "bg-white/[0.03] border-white/10"
                }`}
                data-testid={`lp-package-${p.name.toLowerCase()}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {p.name} Package
                </div>
                <div className="mt-3 text-3xl md:text-4xl font-bold text-white">
                  {p.price}
                </div>
                <div className="mt-1 text-sm text-cyan-300">{p.tagline}</div>

                <ul className="mt-5 space-y-2.5">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote-form"
                  className={`mt-6 w-full inline-flex items-center justify-center gap-1 font-semibold py-3 rounded-lg transition ${
                    p.popular
                      ? "bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black hover:opacity-90"
                      : "bg-white/5 border border-cyan-400/30 text-cyan-200 hover:bg-white/10"
                  }`}
                  data-testid={`lp-package-cta-${p.name.toLowerCase()}`}
                >
                  {p.cta} <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 mt-8">
            All-inclusive pricing · GST included · Free on-site visit · Transparent bill of materials
          </p>
        </div>
      </section>

      {/* ═══════════════ GALLERY ═══════════════ */}
      <section className="py-20 md:py-24 bg-[#0a0e1a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">
              Recent Projects
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              100+ Dedicated Home Theatres,{" "}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] bg-clip-text text-transparent">
                Built Across Karnataka
              </span>
            </h2>
            <p className="text-gray-400 mt-4 text-base">
              Real cinema rooms. Real customers. Real Dolby Atmos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl border border-white/5 aspect-[4/3]"
                data-testid={`lp-gallery-${i}`}
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <div className="text-sm md:text-base font-semibold text-white">{g.label}</div>
                  <div className="text-xs text-cyan-300 mt-0.5">{g.config}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-medium text-sm"
              data-testid="lp-see-all-projects"
            >
              See all 100+ projects <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY US ═══════════════ */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#0f1419] to-[#0a0e1a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">
                Why Qloud Tech
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Bangalore&apos;s most trusted{" "}
                <span className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] bg-clip-text text-transparent">
                  home cinema builders
                </span>
              </h2>
              <p className="text-gray-400 mt-4 text-base md:text-lg">
                We&apos;re vendor-neutral. That means we pick the best speakers, projectors and
                acoustic materials for <em>your</em> room, not what earns us the biggest margin.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: Volume2,
                    title: "Dolby Atmos 5.1.2 / 7.1.2 / 9.1.4",
                    desc: "Certified installations with 300W+ speaker systems and calibrated acoustics"
                  },
                  {
                    icon: Play,
                    title: "4K laser projection",
                    desc: "Sony, Epson, BenQ authorised — HDR10+ and Dolby Vision ready"
                  },
                  {
                    icon: Shield,
                    title: "5-year warranty + lifetime support",
                    desc: "One phone call away. Free calibration checks every 12 months"
                  }
                ].map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{f.title}</div>
                      <div className="text-sm text-gray-400 mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="text-xs uppercase tracking-widest text-cyan-400 mb-4">
                Authorised Partners
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                We work with the world&apos;s best AV brands
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {BRANDS.map((b, i) => (
                  <div
                    key={i}
                    className="bg-black/30 border border-white/5 text-center py-3 px-2 rounded-lg text-sm text-gray-300 font-medium"
                  >
                    {b}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-5">
                Not locked to any single brand — we recommend based on your room & budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ OTHER SERVICES (SECONDARY) ═══════════════ */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">
              Beyond Home Theatre
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Complete your smart home
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              We install the full stack — from lighting automation to security systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {OTHER_SERVICES.map((s, i) => (
              <Link
                key={i}
                to={s.link}
                className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-400/40 rounded-xl p-5 transition"
                data-testid={`lp-other-service-${i}`}
              >
                <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-white font-semibold mb-1">{s.name}</div>
                <div className="text-sm text-gray-400">{s.desc}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300 font-medium">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-20 bg-[#0f1419]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">
              What Customers Say
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Loved by 450+ families across Karnataka
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6"
                data-testid={`lp-testimonial-${i}`}
              >
                <div className="flex gap-1 mb-3">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-cyan-300">{t.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest text-cyan-400 mb-3">
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group bg-white/[0.03] border border-white/10 rounded-xl p-5 transition"
                data-testid={`lp-faq-${i}`}
              >
                <summary className="flex items-center justify-between cursor-pointer text-white font-semibold list-none">
                  {f.q}
                  <ChevronRight className="w-5 h-5 text-cyan-400 group-open:rotate-90 transition" />
                </summary>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-cyan-500/10 via-[#0a0e1a] to-[#0a0e1a] border-t border-cyan-400/20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to build your{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] bg-clip-text text-transparent">
              home cinema?
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-base md:text-lg">
            Free on-site consultation. No obligation. Talk to a Qloud Tech specialist today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00D4FF] to-[#67E8F9] text-black font-bold text-base px-8 py-4 rounded-xl hover:scale-[1.02] transition"
              data-testid="lp-final-quote"
            >
              Get My Free Quote <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-cyan-400/30 text-cyan-200 font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition"
              data-testid="lp-final-call"
            >
              <Phone className="w-5 h-5" /> Call {PHONE.replace("+91-", "+91 ")}
            </a>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-white/5 py-8 pb-24 md:pb-8">
        <div className="container mx-auto px-4 md:px-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Qloud Tech · Kothanur, Bangalore ·{" "}
          <a href={`mailto:contact@qloudsmarthomes.com`} className="text-gray-400 hover:text-cyan-300">
            contact@qloudsmarthomes.com
          </a>{" "}
          ·{" "}
          <Link to="/" className="text-gray-400 hover:text-cyan-300">
            Visit main site
          </Link>
        </div>
      </footer>

      <MobileCTABar />
    </div>
  );
}
