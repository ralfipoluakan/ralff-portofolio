import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceList from "./components/ExperienceList";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import dbData from "../db.json";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const allData = {
        profile: dbData.profile,
        experience: dbData.experience,
        projects: dbData.projects || [],
        certificates: dbData.certificates,
        contact: dbData.contact,
        social: dbData.social
      };
      console.log("ALL DATA LOADED:", allData);
      setData(allData);
      setLoading(false);
    } catch (err) {
      console.error("DATA LOAD ERROR:", err);
      setError(err);
      setLoading(false);
    }

    const style = document.createElement("style");
    style.textContent = `
      #hero, #about, #projects, #experience, #certificates, #contact {
        background: transparent !important;
      }
      #hero > div:first-child,
      #about section, #projects section, #experience section, #certificates section, #contact section {
        background: transparent !important;
      }
      #about.section-padding, #projects.section-padding, #experience.section-padding, 
      #certificates.section-padding, #contact.section-padding {
        padding: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <p className="text-white text-xl font-light">Please wait...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col gap-4 items-center justify-center bg-black">
        <p className="text-white text-xl font-light">Failed to load data</p>
        <button
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        No data received.
      </div>
    );
  }

  const profilePhoto = data?.profile?.photo || "/profile-photo.jpg";

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <img
          src={profilePhoto}
          alt="Background"
          className="w-full h-full object-cover"
          style={{
            filter: "blur(1px)",
            transform: "scale(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: "overlay",
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />

        <Hero data={data} />

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
          style={{ scrollMarginTop: "100px" }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
            <About />
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
          style={{ scrollMarginTop: "100px" }}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
            <Projects data={data} />
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
          style={{ scrollMarginTop: "100px" }}
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-12">
            <ExperienceList data={data} />
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
          style={{ scrollMarginTop: "100px" }}
        >
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
            <Certificates data={data} />
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
          style={{ scrollMarginTop: "100px" }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
            <Contact data={data} />
          </div>
        </motion.div>

        <Footer data={data} />
      </div>
    </div>
  );
}

export default App;
