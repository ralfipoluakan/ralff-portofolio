import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ImpactMetrics from "./components/ImpactMetrics";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Leadership from "./components/Leadership";
import ExperienceList from "./components/ExperienceList";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import dbData from "../db.json";

const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const Section = ({ children, className = "" }) => (
  <motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12 }}
    className={`relative ${className}`}
    style={{ scrollMarginTop: "96px" }}
  >
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-20">{children}</div>
  </motion.div>
);

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData({
        profile: dbData.profile,
        impactMetrics: dbData.impactMetrics,
        leadership: dbData.leadership,
        experience: dbData.experience,
        achievements: dbData.achievements,
        skills: dbData.skills,
        projects: dbData.projects || [],
        certificates: dbData.certificates,
        contact: dbData.contact,
        social: dbData.social,
      });
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0a0a0f]">
        <p className="text-white/70 text-lg font-light tracking-wide">Loading portfolio…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col gap-4 items-center justify-center bg-[#0a0a0f]">
        <p className="text-white/80">Failed to load portfolio data.</p>
        <button
          type="button"
          className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  const profilePhoto = data?.profile?.photo || "/profile-photo.jpg";

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden bg-[#0a0a0f]">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={profilePhoto}
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-30"
          style={{ filter: "blur(8px)", transform: "scale(1.08)" }}
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/92" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(139,92,246,0.12), transparent)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero data={data} />

        <Section>
          <About data={data} />
        </Section>

        <Section>
          <ImpactMetrics data={data} />
        </Section>

        <Section>
          <FeaturedProject data={data} />
        </Section>

        <Section className="!pb-8">
          <Projects data={data} />
        </Section>

        <Section>
          <TechStack data={data} />
        </Section>

        <Section>
          <Leadership data={data} />
        </Section>

        <Section>
          <ExperienceList data={data} />
        </Section>

        <Section>
          <Achievements data={data} />
        </Section>

        <Section>
          <Certificates data={data} />
        </Section>

        <Section>
          <Contact data={data} />
        </Section>

        <Footer data={data} />
      </div>
    </div>
  );
}

export default App;
