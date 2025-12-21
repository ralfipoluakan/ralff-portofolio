import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceList from "./components/ExperienceList";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import dbData from "../db.json";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load data directly from imported JSON file
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
  }, []);

  // 👉 PRELOADER
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <p className="text-white text-xl">Please wait...</p>
      </div>
    );
  }

  // 👉 ERROR UI
  if (error) {
    return (
      <div className="h-screen flex flex-col gap-4 items-center justify-center bg-red-900">
        <p className="text-white text-xl">Failed to load data</p>
        <button
          className="px-4 py-2 bg-white text-black rounded"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  // 👉 FIX PALING PENTING
  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        No data received.
      </div>
    );
  }

  // 👉 RENDER SEMUA KOMPONEN (tidak blank lagi)
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Hero data={data} />
      <About />
      <Projects data={data} />
      <ExperienceList data={data} />
      <Certificates data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
