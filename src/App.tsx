import { useMemo, useState, useEffect } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Code2,
  Crown,
  ExternalLink,
  Eye,
  FileSpreadsheet,
  Flame,
  Globe,
  Home,
  Instagram,
  Languages,
  LayoutTemplate,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Moon,
  PlayCircle,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Stars,
  Sun,
  TrendingUp,
  User,
  Wand2,
  X,
  Zap,
  BriefcaseBusiness,
  PhoneCall,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  category: string;
  image: string;
  link: string;
  tech: string[];
  description: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type Lang = "en" | "fr" | "ar";

const categories = ["All", "Website", "Portfolio", "Excel", "UI/UX"];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<Lang>("en");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const t = translations[lang];

  const projects: Project[] = useMemo(
    () => [
      {
        title: "Luxury Restaurant Website",
        category: "Website",
        image: "https://images.pexels.com/photos/36973124/pexels-photo-36973124.jpeg",
        link: "https://chezabdofood.netlify.app/",
        tech: ["React", "Tailwind", "Responsive"],
        description: "A premium restaurant website with elegant sections and a modern menu showcase.",
      },
      {
        title: "Client & Order Management System",
        category: "Website",
        image: "https://images.pexels.com/photos/37051454/pexels-photo-37051454.jpeg",
        link: "https://venom-os.netlify.app/",
        tech: ["WebApp", "Branding", "Animation"],
        description: "A web-based SaaS application for managing clients and tracking orders with a clean interface and scalable architecture.",
      },
      {
        title: "Excel Productivity Dashboard",
        category: "Excel",
        image: "https://images.pexels.com/photos/36965792/pexels-photo-36965792.jpeg",
        link: "https://todolist-mrd.netlify.app/",
        tech: ["Excel", "Dashboard", "Tracking"],
        description: "A practical and modern Excel dashboard for productivity and business use.",
      },
      {
        title: "Modern UI Showcase",
        category: "UI/UX",
        image: "/projects/project4.jpg",
        link: "https://example.com",
        tech: ["UI", "UX", "Visual Design"],
        description: "A premium interface concept with clean modern aesthetics.",
      },
      {
        title: "Landing Page for Services",
        category: "Website",
        image: "/projects/project5.jpg",
        link: "https://example.com",
        tech: ["Lead Gen", "CTA", "Responsive"],
        description: "A conversion-focused landing page made to attract more clients.",
      },
      {
        title: "Premium Bio Link Profile",
        category: "Portfolio",
        image: "https://images.pexels.com/photos/37051578/pexels-photo-37051578.jpeg",
        link: "https://my-portfolio-mrd.netlify.app/",
        tech: ["Bio Link", "Modern", "Branding"],
        description: "A stylish mobile-first bio link profile for freelancers and creators.",
      },
    ],
    []
  );

  const faqs: FAQ[] = [
    {
      question: t.faq1q,
      answer: t.faq1a,
    },
    {
      question: t.faq2q,
      answer: t.faq2a,
    },
    {
      question: t.faq3q,
      answer: t.faq3a,
    },
    {
      question: t.faq4q,
      answer: t.faq4a,
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-[#070b14] text-white"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-white text-slate-900"
      }`}
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className={`${darkMode ? "opacity-100" : "opacity-70"} absolute inset-0 transition`}>
          <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-[-120px] top-32 h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute bottom-[-120px] left-1/3 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-5 md:px-6">
        {/* NAVBAR */}
        <motion.header
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className={`sticky top-4 z-50 mb-8 rounded-3xl border px-4 py-3 backdrop-blur-2xl ${
            darkMode
              ? "border-white/10 bg-white/5"
              : "border-slate-200/70 bg-white/70 shadow-xl shadow-slate-200/50"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                <Crown className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-base font-extrabold">Mohammed Rida</h2>
                <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Web Developer
                </p>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-6 xl:flex">
              {[
                ["home", t.navHome],
                ["services", t.navServices],
                ["portfolio", t.navPortfolio],
                ["excel", t.navExcel],
                ["faq", t.navFaq],
                ["contact", t.navContact],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`text-sm font-medium transition ${
                    darkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-2">
              {/* Language */}
              <div
                className={`hidden rounded-2xl border p-1 sm:flex ${
                  darkMode ? "border-white/10 bg-white/5" : "border-slate-200 bg-white/70"
                }`}
              >
                {(["en", "fr", "ar"] as Lang[]).map((lng) => (
                  <button
                    key={lng}
                    onClick={() => setLang(lng)}
                    className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                      lang === lng
                        ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                        : darkMode
                        ? "text-slate-300 hover:bg-white/10"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Theme */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                    : "border-slate-200 bg-white/70 text-slate-800 hover:bg-slate-100"
                }`}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileMenu(true)}
                className={`flex h-11 w-11 items-center justify-center rounded-2xl border xl:hidden ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white"
                    : "border-slate-200 bg-white/70 text-slate-800"
                }`}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.header>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
            >
              <motion.div
                initial={{ x: lang === "ar" ? -300 : 300 }}
                animate={{ x: 0 }}
                exit={{ x: lang === "ar" ? -300 : 300 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className={`absolute top-0 h-full w-[84%] max-w-sm p-6 ${
                  lang === "ar" ? "left-0" : "right-0"
                } ${darkMode ? "bg-[#0b1220] text-white" : "bg-white text-slate-900"}`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Menu</h3>
                    <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      Navigation
                    </p>
                  </div>
                  <button
                    onClick={() => setMobileMenu(false)}
                    className={`rounded-xl p-2 ${
                      darkMode ? "bg-white/10 text-white" : "bg-slate-100 text-slate-900"
                    }`}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    ["home", t.navHome],
                    ["services", t.navServices],
                    ["portfolio", t.navPortfolio],
                    ["excel", t.navExcel],
                    ["faq", t.navFaq],
                    ["contact", t.navContact],
                  ].map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setMobileMenu(false)}
                      className={`block rounded-2xl px-4 py-4 text-base font-semibold ${
                        darkMode ? "bg-white/5 hover:bg-white/10" : "bg-slate-100 hover:bg-slate-200"
                      }`}
                    >
                      {label}
                    </a>
                  ))}
                </div>

                <div className="mt-6">
                  <p className={`mb-3 text-sm font-semibold ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    <Languages className="mr-2 inline h-4 w-4" />
                    Language
                  </p>
                  <div className="flex gap-2">
                    {(["en", "fr", "ar"] as Lang[]).map((lng) => (
                      <button
                        key={lng}
                        onClick={() => setLang(lng)}
                        className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                          lang === lng
                            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                            : darkMode
                            ? "bg-white/5 text-slate-300"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {lng.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO */}
        <section id="home" className="grid grid-cols-1 gap-6 xl:grid-cols-[1.12fr_0.88fr]">
          {/* LEFT HERO */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`rounded-[34px] border p-6 md:p-10 backdrop-blur-2xl ${
              darkMode
                ? "border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(80,110,180,0.10)]"
                : "border-slate-200/70 bg-white/70 shadow-[0_20px_80px_rgba(120,140,200,0.15)]"
            }`}
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-500">
              <Sparkles className="h-4 w-4" />
              {t.heroBadge}
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              {t.heroTitle1}{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                {t.heroTitle2}
              </span>
            </h1>

            <p className={`mt-5 max-w-2xl text-[15px] leading-8 md:text-[17px] ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              {t.heroDesc}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="https://wa.me/212678368386?text=Hello%20Mohammed_Rida%2C%20I%20want%20a%20free%20quote.">
                <Rocket className="h-5 w-5" />
                {t.heroBtn1}
              </PrimaryButton>

              <SecondaryButton href="#portfolio" darkMode={darkMode}>
                <Eye className="h-5 w-5" />
                {t.heroBtn2}
              </SecondaryButton>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <StatCard value="8+" label={t.stat1} darkMode={darkMode} />
              <StatCard value="100%" label={t.stat2} darkMode={darkMode} />
              <StatCard value="Fast" label={t.stat3} darkMode={darkMode} />
              <StatCard value="Premium" label={t.stat4} darkMode={darkMode} />
            </div>
          </motion.div>

          {/* RIGHT HERO */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className={`rounded-[34px] border p-6 md:p-8 backdrop-blur-2xl ${
              darkMode
                ? "border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(80,110,180,0.10)]"
                : "border-slate-200/70 bg-white/70 shadow-[0_20px_80px_rgba(120,140,200,0.15)]"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-5 flex h-28 w-28 items-center justify-center rounded-full border-[5px] border-white/20 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-[0_18px_50px_rgba(80,100,255,0.35)]">
                <Crown className="h-12 w-12 text-white" />
              </div>

              <h2 className="text-3xl font-extrabold">Mohammed Rida Dahir</h2>
              <p className={`mt-2 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{t.profileTitle}</p>

              <div className="mt-6 grid w-full grid-cols-2 gap-4">
                <ServiceCard icon={<Globe className="h-6 w-6" />} title={t.service1} darkMode={darkMode} />
                <ServiceCard icon={<Wand2 className="h-6 w-6" />} title={t.service2} darkMode={darkMode} />
              </div>

              <div className="mt-7 w-full space-y-3">
                <ContactButton
                  icon={<MessageCircle className="h-5 w-5" />}
                  text="WhatsApp"
                  href="https://wa.me/212678368386"
                  bgColor="bg-gradient-to-r from-emerald-500 to-green-600"
                  hoverColor="hover:from-emerald-600 hover:to-green-700"
                />
                <ContactButton
                  icon={<Mail className="h-5 w-5" />}
                  text="Email"
                  href="mailto:mohammedridadahir@gmail.com"
                  bgColor="bg-gradient-to-r from-slate-700 to-slate-950"
                  hoverColor="hover:from-slate-800 hover:to-black"
                />
                <ContactButton
                  icon={<Instagram className="h-5 w-5" />}
                  text="Instagram"
                  href="https://www.instagram.com/venoooom.exe?igsh=bzNkcm5oamllcm5i"
                  bgColor="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600"
                  hoverColor="hover:from-pink-600 hover:via-fuchsia-600 hover:to-violet-700"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <MiniFeature icon={<Flame className="h-5 w-5" />} title={t.feature1} text={t.feature1d} darkMode={darkMode} />
          <MiniFeature icon={<TrendingUp className="h-5 w-5" />} title={t.feature2} text={t.feature2d} darkMode={darkMode} />
          <MiniFeature icon={<Zap className="h-5 w-5" />} title={t.feature3} text={t.feature3d} darkMode={darkMode} />
        </section>

        {/* ABOUT + SERVICES */}
        <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1fr]">
          <SectionCard title={t.aboutTitle} subtitle={t.aboutSub} darkMode={darkMode}>
            <div className="grid grid-cols-1 gap-4">
              <AboutBox icon={<User className="h-5 w-5" />} title={t.about1} text={t.about1d} darkMode={darkMode} />
              <AboutBox icon={<Code2 className="h-5 w-5" />} title={t.about2} text={t.about2d} darkMode={darkMode} />
            </div>
          </SectionCard>

          <SectionCard title={t.servicesTitle} subtitle={t.servicesSub} darkMode={darkMode}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <MiniFeature icon={<BriefcaseBusiness className="h-5 w-5" />} title={t.s1} text={t.s1d} darkMode={darkMode} />
              <MiniFeature icon={<LayoutTemplate className="h-5 w-5" />} title={t.s2} text={t.s2d} darkMode={darkMode} />
              <MiniFeature icon={<MonitorSmartphone className="h-5 w-5" />} title={t.s3} text={t.s3d} darkMode={darkMode} />
              <MiniFeature icon={<FileSpreadsheet className="h-5 w-5" />} title={t.s4} text={t.s4d} darkMode={darkMode} />
            </div>
          </SectionCard>
        </section>

        {/* SHOWCASE */}
        <section className="mt-6">
          <SectionCard title={t.showcaseTitle} subtitle={t.showcaseSub} darkMode={darkMode}>
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-blue-600/20 to-violet-600/20 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_25%)]" />
              <div className="relative flex min-h-[260px] flex-col items-center justify-center text-center">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-xl"
                >
                  <PlayCircle className="h-12 w-12 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">{t.showcaseCardTitle}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">{t.showcaseCardDesc}</p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="mt-6">
          <SectionCard title={t.portfolioTitle} subtitle={t.portfolioSub} darkMode={darkMode}>
            <div className="mb-5 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    filter === cat
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                      : darkMode
                      ? "bg-white/5 text-slate-300 hover:bg-white/10"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </SectionCard>
        </section>

        {/* EXCEL */}
        <section id="excel" className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <SectionCard title={t.excelTitle} subtitle={t.excelSub} darkMode={darkMode}>
            <div className="space-y-4">
              <p className={`text-sm leading-8 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                {t.excelDesc}
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Tag text="To-Do Dashboard" darkMode={darkMode} />
                <Tag text="Business Tracker" darkMode={darkMode} />
                <Tag text="Task Management" darkMode={darkMode} />
                <Tag text="Custom Productivity File" darkMode={darkMode} />
              </div>
            </div>
          </SectionCard>

          <SectionCard title={t.excelWhyTitle} subtitle={t.excelWhySub} darkMode={darkMode}>
            <div className="grid grid-cols-1 gap-4">
              <MiniFeature icon={<ShieldCheck className="h-5 w-5" />} title={t.excelWhy1} text={t.excelWhy1d} darkMode={darkMode} />
              <MiniFeature icon={<TrendingUp className="h-5 w-5" />} title={t.excelWhy2} text={t.excelWhy2d} darkMode={darkMode} />
            </div>
          </SectionCard>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-6">
          <SectionCard title="FAQ" subtitle={t.faqSubTitle} darkMode={darkMode}>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  faq={faq}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </SectionCard>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="mt-6">
          <div className="rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6 shadow-[0_18px_60px_rgba(90,100,255,0.30)] md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{t.ctaTitle}</h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-white/85">{t.ctaDesc}</p>
              </div>

              <PrimaryButton href="https://wa.me/212678368386?text=Hello%20Mohammed_Rida%2C%20I%20want%20to%20start%20a%20project.">
                <PhoneCall className="h-5 w-5" />
                {t.ctaBtn}
              </PrimaryButton>
            </div>
          </div>
        </section>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/212678368386?text=Hello%20Mohammed_Rida%2C%20I%20would%20like%20to%20discuss%20my%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-[0_14px_40px_rgba(16,185,129,0.45)] transition hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.div>
      </a>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            darkMode={darkMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- UI Components ---------------- */

function PrimaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-4 text-[15px] font-semibold text-white shadow-[0_14px_40px_rgba(90,100,255,0.35)] transition-all duration-300 hover:shadow-[0_18px_50px_rgba(90,100,255,0.42)] sm:w-auto"
    >
      {children}
    </motion.a>
  );
}

function SecondaryButton({
  children,
  href,
  darkMode,
}: {
  children: React.ReactNode;
  href: string;
  darkMode: boolean;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={`inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-[15px] font-semibold transition sm:w-auto ${
        darkMode
          ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
          : "border border-slate-200 bg-white/70 text-slate-900 hover:bg-slate-100"
      }`}
    >
      {children}
    </motion.a>
  );
}

function StatCard({
  value,
  label,
  darkMode,
}: {
  value: string;
  label: string;
  darkMode: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-4 text-center backdrop-blur-xl ${
        darkMode ? "border border-white/10 bg-white/5" : "border border-slate-200 bg-white/70"
      }`}
    >
      <div className="text-2xl font-extrabold">{value}</div>
      <p className={`mt-1 text-xs font-medium ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{label}</p>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  darkMode,
}: {
  icon: React.ReactNode;
  title: string;
  darkMode: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className={`rounded-[28px] p-5 text-center shadow-[0_12px_30px_rgba(100,120,180,0.08)] backdrop-blur-md ${
        darkMode ? "border border-white/10 bg-white/5" : "border border-slate-200 bg-white/70"
      }`}
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        {icon}
      </div>
      <p className="text-[15px] font-semibold leading-6">{title}</p>
    </motion.div>
  );
}

function ContactButton({
  icon,
  text,
  href,
  bgColor,
  hoverColor,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
  bgColor: string;
  hoverColor: string;
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full items-center justify-center gap-4 rounded-2xl px-6 py-4 text-base font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ${bgColor} ${hoverColor}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/20 backdrop-blur-md">
        {icon}
      </div>
      <span>{text}</span>
    </motion.a>
  );
}

function SectionCard({
  title,
  subtitle,
  children,
  darkMode,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  darkMode: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
      className={`rounded-[30px] p-5 shadow-[0_16px_50px_rgba(100,120,180,0.10)] backdrop-blur-2xl md:p-6 ${
        darkMode ? "border border-white/10 bg-white/5" : "border border-slate-200/70 bg-white/70"
      }`}
    >
      <div className="mb-5">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <Stars className="h-5 w-5 text-violet-500" />
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-1 text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{subtitle}</p>
        )}
      </div>
      {children}
    </motion.div>
  );
}

function AboutBox({
  icon,
  title,
  text,
  darkMode,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  darkMode: boolean;
}) {
  return (
    <div className={`rounded-3xl p-5 ${darkMode ? "border border-white/10 bg-white/5" : "border border-slate-200 bg-white/80"}`}>
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white">
        {icon}
      </div>
      <h3 className="text-base font-bold">{title}</h3>
      <p className={`mt-2 text-sm leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
    </div>
  );
}

function MiniFeature({
  icon,
  title,
  text,
  darkMode,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  darkMode: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-3xl p-5 ${darkMode ? "border border-white/10 bg-white/5" : "border border-slate-200 bg-white/80"}`}
    >
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white">
        {icon}
      </div>
      <h3 className="text-base font-bold">{title}</h3>
      <p className={`mt-2 text-sm leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
    </motion.div>
  );
}

function ProjectCard({
  project,
  onOpen,
  darkMode,
}: {
  project: Project;
  onOpen: () => void;
  darkMode: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(100,120,180,0.12)] backdrop-blur-xl ${
        darkMode ? "border border-white/10 bg-white/5" : "border border-slate-200 bg-white/80"
      }`}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-90" />

        <div className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {project.category}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
          <button
            onClick={onOpen}
            className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg"
          >
            <Eye className="h-4 w-4" />
            Quick View
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-base font-semibold">{project.title}</h3>
          <p className={`mt-1 text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>View project preview</p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white/10 p-2 transition hover:bg-blue-500/20 hover:text-blue-300"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
  darkMode,
}: {
  project: Project;
  onClose: () => void;
  darkMode: boolean;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-2xl overflow-hidden rounded-[32px] shadow-2xl ${
          darkMode ? "border border-white/10 bg-[#111827] text-white" : "border border-slate-200 bg-white text-slate-900"
        }`}
      >
        <div className="relative h-72 overflow-hidden">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition hover:bg-white/30"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute bottom-5 left-5">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              {project.category}
            </span>
            <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="p-6">
          <p className={`${darkMode ? "text-slate-300" : "text-slate-600"} text-[15px] leading-7`}>
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item, index) => (
              <span
                key={index}
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  darkMode ? "bg-white/10 text-slate-200" : "bg-slate-100 text-slate-700"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              Visit Project
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href="https://wa.me/212678368386?text=Hello%20Mohammed_Rida%2C%20I%20saw%20one%20of%20your%20projects%20and%20I%20want%20something%20similar."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] ${
                darkMode ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              Ask for Similar Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Tag({
  text,
  darkMode,
}: {
  text: string;
  darkMode: boolean;
}) {
  return (
    <div className={`rounded-2xl px-4 py-3 text-sm font-medium ${darkMode ? "border border-white/10 bg-white/5 text-slate-200" : "border border-slate-200 bg-white/80 text-slate-700"}`}>
      {text}
    </div>
  );
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
  darkMode,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  darkMode: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl ${darkMode ? "border border-white/10 bg-white/5" : "border border-slate-200 bg-white/80"}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-semibold">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          } ${darkMode ? "text-slate-300" : "text-slate-500"}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`px-5 pb-5 text-sm leading-7 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- TRANSLATIONS ---------------- */

const translations = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navExcel: "Excel",
    navFaq: "FAQ",
    navContact: "Contact",

    heroBadge: "Premium Websites • Portfolios • Excel Tools",
    heroTitle1: "I Build",
    heroTitle2: "Modern Digital Experiences",
    heroDesc:
      "Elegant websites, premium landing pages, personal portfolios and useful Excel systems made to look professional and leave a strong impression.",
    heroBtn1: "Get a Free Quote",
    heroBtn2: "View My Work",

    stat1: "Projects",
    stat2: "Responsive",
    stat3: "Delivery",
    stat4: "Style",

    profileTitle: "Freelance Web Developer",
    service1: "Website Creation",
    service2: "Modern UI / UX",

    feature1: "Eye-Catching",
    feature1d: "Strong visuals and elegant motion that instantly grab attention.",
    feature2: "Professional Presence",
    feature2d: "A premium online look that makes your service feel more serious.",
    feature3: "Client Conversion",
    feature3d: "The page structure is designed to make people click and contact you.",

    aboutTitle: "About Me",
    aboutSub: "I create modern, refined, and professional websites that transform ideas into powerful digital experiences, built with clarity, style, and attention to every detail.",
    about1: "Who I Help",
    about1d: "I help freelancers, creators, businesses and project owners build a stronger and more professional online presence.",
    about2: "My Style",
    about2d: "I focus on elegant layouts, clean spacing, modern animations and premium presentation.",

    servicesTitle: "Services",
    servicesSub: "Professional services designed to bring clarity, quality, and real value to your project.",
    s1: "Business Websites",
    s1d: "Modern websites for services, products and information.",
    s2: "Landing Pages",
    s2d: "Pages designed to capture attention and convert visitors.",
    s3: "Responsive Design",
    s3d: "Clean on mobile, tablet and desktop.",
    s4: "Excel Dashboards",
    s4d: "Useful trackers, dashboards and productivity tools.",

    showcaseTitle: "Showcase",
    showcaseSub: "Ideas brought to life with style.",
    showcaseCardTitle: "Video",
    showcaseCardDesc: "",

    portfolioTitle: "Portfolio",
    portfolioSub: "Featured Projects",

    excelTitle: "Excel Solutions",
    excelSub: "",
    excelDesc: "I can also create useful Excel files such as productivity dashboards, to-do systems, trackers and custom management sheets.",
    excelWhyTitle: "Why It Matters",
    excelWhySub: "",
    excelWhy1: "Organized Workflow",
    excelWhy1d: "Useful sheets that make work easier and cleaner.",
    excelWhy2: "Time Saving",
    excelWhy2d: "Good Excel systems reduce repetition and improve organization.",

    faqSubTitle: "",
    faq1q: "How long does it take to build a website?",
    faq1a: "It depends on the project, but many websites can be completed within a few days to one week.",
    faq2q: "Can you make it work well on mobile and desktop?",
    faq2a: "Yes. I focus on responsive design so everything looks clean on all devices.",
    faq3q: "Can I send only an idea?",
    faq3a: "Yes. Even if your idea is not fully clear, I can help shape it into something useful and professional.",
    faq4q: "Do you also create Excel tools?",
    faq4a: "Yes. I can create useful Excel dashboards, trackers, to-do systems and custom files.",

    ctaTitle: "Have an idea? Let’s build it.",
    ctaDesc: "Whether it’s a website, portfolio or Excel tool, I can help you create something useful, clean and premium.",
    ctaBtn: "Start My Project",
  },

  fr: {
    navHome: "Accueil",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navExcel: "Excel",
    navFaq: "FAQ",
    navContact: "Contact",

    heroBadge: "Sites Premium • Portfolios • Outils Excel",
    heroTitle1: "Je crée des",
    heroTitle2: "Expériences Digitales Modernes",
    heroDesc:
      "Des sites élégants, landing pages premium, portfolios personnels et systèmes Excel utiles conçus pour paraître professionnels et marquer les visiteurs.",
    heroBtn1: "Demander un Devis",
    heroBtn2: "Voir Mon Travail",

    stat1: "Projets",
    stat2: "Responsive",
    stat3: "Livraison",
    stat4: "Style",

    profileTitle: "Développeur Web Freelance",
    service1: "Création de Sites",
    service2: "UI / UX Moderne",

    feature1: "Attirant",
    feature1d: "Des visuels puissants et une animation élégante qui captent l’attention.",
    feature2: "Présence Pro",
    feature2d: "Une image en ligne premium qui rend votre service plus sérieux.",
    feature3: "Conversion Client",
    feature3d: "La structure est pensée pour pousser les visiteurs à vous contacter.",

    aboutTitle: "À Propos",
    aboutSub: "Je crée des sites web modernes, raffinés et professionnels qui transforment les idées en expériences digitales puissantes, conçues avec clarté, style et attention à chaque détail.",
    about1: "Qui j’aide",
    about1d: "J’aide les freelances, créateurs, entreprises et porteurs de projets à améliorer leur présence en ligne.",
    about2: "Mon Style",
    about2d: "Je me concentre sur des layouts élégants, un bon spacing, des animations modernes et une présentation premium.",

    servicesTitle: "Services",
    servicesSub: "Des services professionnels conçus pour apporter clarté, qualité et réelle valeur à votre projet.",
    s1: "Sites Business",
    s1d: "Des sites modernes pour services, produits et informations.",
    s2: "Landing Pages",
    s2d: "Des pages conçues pour attirer et convertir les visiteurs.",
    s3: "Responsive Design",
    s3d: "Propre sur mobile, tablette et ordinateur.",
    s4: "Dashboards Excel",
    s4d: "Trackers, dashboards et outils de productivité utiles.",

    showcaseTitle: "Showcase",
    showcaseSub: "Des idées qui prennent vie avec style.",
    showcaseCardTitle: " Vidéo ",
    showcaseCardDesc: "",

    portfolioTitle: "Portfolio",
    portfolioSub: "Projets en vedette",

    excelTitle: "Solutions Excel",
    excelSub: "",
    excelDesc: "Je peux aussi créer des fichiers Excel utiles comme des dashboards, systèmes to-do, trackers et feuilles de gestion personnalisées.",
    excelWhyTitle: "Pourquoi c’est utile",
    excelWhySub: "",
    excelWhy1: "Organisation",
    excelWhy1d: "Des feuilles utiles pour travailler plus proprement.",
    excelWhy2: "Gain de Temps",
    excelWhy2d: "De bons systèmes Excel réduisent la répétition et améliorent l’organisation.",

    faqSubTitle: "",
    faq1q: "Combien de temps faut-il pour créer un site ?",
    faq1a: "Cela dépend du projet, mais beaucoup de sites peuvent être terminés en quelques jours à une semaine.",
    faq2q: "Est-ce que le site sera bien sur mobile et PC ?",
    faq2a: "Oui. Je me concentre sur un design responsive pour qu’il soit propre sur tous les appareils.",
    faq3q: "Puis-je envoyer seulement une idée ?",
    faq3a: "Oui. Même si votre idée n’est pas totalement claire, je peux vous aider à la transformer en quelque chose de professionnel.",
    faq4q: "Faites-vous aussi des outils Excel ?",
    faq4a: "Oui. Je peux créer des dashboards, trackers, systèmes to-do et fichiers personnalisés.",

    ctaTitle: "Vous avez une idée ? Construisons-la.",
    ctaDesc: "Que ce soit un site web, un portfolio ou un outil Excel, je peux vous aider à créer quelque chose de propre, utile et premium.",
    ctaBtn: "Commencer Mon Projet",
  },

  ar: {
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navPortfolio: "الأعمال",
    navExcel: "إكسل",
    navFaq: "الأسئلة",
    navContact: "تواصل",

    heroBadge: "مواقع احترافية • بورتفوليو • أدوات Excel",
    heroTitle1: "أقوم ببناء",
    heroTitle2: "تجارب رقمية عصرية",
    heroDesc:
      "مواقع أنيقة، صفحات هبوط احترافية، بورتفوليو شخصي، وأنظمة Excel مفيدة بمظهر قوي واحترافي يترك انطباعاً ممتازاً.",
    heroBtn1: "اطلب عرض سعر",
    heroBtn2: "شاهد أعمالي",

    stat1: "مشاريع",
    stat2: "متجاوب",
    stat3: "التسليم",
    stat4: "الستايل",

    profileTitle: "مطور ويب مستقل",
    service1: "إنشاء المواقع",
    service2: "تصميم عصري UI / UX",

    feature1: "جذاب بصرياً",
    feature1d: "تصميم قوي وحركات أنيقة تشد الانتباه مباشرة.",
    feature2: "حضور احترافي",
    feature2d: "مظهر رقمي فاخر يجعل خدمتك تبدو أكثر جدية.",
    feature3: "جذب العملاء",
    feature3d: "هيكلة الصفحة مصممة لتشجع الزائر على التواصل معك.",

    aboutTitle: "من أنا",
    aboutSub: " أصمم مواقع إلكترونية عصرية، راقية واحترافية، تحوّل الأفكار إلى تجارب رقمية قوية، مبنية بوضوح، أناقة واهتمام بكل التفاصيل.",
    about1: "من أساعد",
    about1d: "أساعد المستقلين، صناع المحتوى، الشركات وأصحاب المشاريع على بناء حضور رقمي أقوى وأكثر احترافية.",
    about2: "أسلوبي",
    about2d: "أركز على تصميم أنيق، spacing نظيف، animations عصرية، وتقديم premium.",

    servicesTitle: "الخدمات",
    servicesSub: " خدمات احترافية مصممة لتمنح مشروعك الوضوح، الجودة والقيمة الحقيقية",
    s1: "مواقع الأعمال",
    s1d: "مواقع حديثة للخدمات، المنتجات والمعلومات.",
    s2: "Landing Pages",
    s2d: "صفحات مصممة لجذب الزوار وتحويلهم إلى عملاء.",
    s3: "تصميم متجاوب",
    s3d: "مظهر نظيف على الهاتف، التابلت والحاسوب.",
    s4: "لوحات Excel",
    s4d: "Dashboards و trackers وأدوات إنتاجية مفيدة.",

    showcaseTitle: "عرض مرئي",
    showcaseSub: " أفكار تتحقق بأناقة.",
    showcaseCardTitle: " فيديو ",
    showcaseCardDesc: "",
    portfolioTitle: "الأعمال",
    portfolioSub: " أبرز المشاريع",

    excelTitle: "حلول Excel",
    excelSub: "      ",
    excelDesc: "أستطيع أيضاً إنشاء ملفات Excel مفيدة مثل dashboards، أنظمة to-do، trackers وملفات تسيير مخصصة.",
    excelWhyTitle: "لماذا هذا مهم",
    excelWhySub: "         ",
    excelWhy1: "تنظيم أفضل",
    excelWhy1d: "ملفات مفيدة تجعل العمل أسهل وأنظف.",
    excelWhy2: "ربح الوقت",
    excelWhy2d: "أنظمة Excel الجيدة تقلل التكرار وتحسن التنظيم.",

    faqSubTitle: "  ",
    faq1q: "كم من الوقت يحتاج إنشاء موقع؟",
    faq1a: "يعتمد على المشروع، لكن العديد من المواقع يمكن إنهاؤها خلال بضعة أيام إلى أسبوع.",
    faq2q: "هل سيعمل جيداً على الهاتف والحاسوب؟",
    faq2a: "نعم. أركز على التصميم المتجاوب ليظهر الموقع بشكل ممتاز على جميع الأجهزة.",
    faq3q: "هل يمكنني إرسال فكرة فقط؟",
    faq3a: "نعم. حتى لو لم تكن الفكرة واضحة بالكامل، أستطيع مساعدتك في تحويلها إلى شيء احترافي ومفيد.",
    faq4q: "هل تصنع أيضاً أدوات Excel؟",
    faq4a: "نعم. أستطيع إنشاء dashboards، trackers، أنظمة to-do وملفات مخصصة.",

    ctaTitle: "عندك فكرة؟ لنحوّلها إلى مشروع.",
    ctaDesc: "سواء كان موقعاً، بورتفوليو أو أداة Excel، يمكنني مساعدتك في إنشاء شيء نظيف، مفيد واحترافي.",
    ctaBtn: "ابدأ مشروعي",
  },
};