import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceList from "./components/ExperienceList";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all data from separate endpoints
    Promise.all([
      fetch("http://localhost:3002/profile").then(res => res.json()),
      fetch("http://localhost:3002/experience").then(res => res.json()),
      fetch("http://localhost:3002/certificates").then(res => res.json()),
      fetch("http://localhost:3002/contact").then(res => res.json()),
      fetch("http://localhost:3002/social").then(res => res.json())
    ])
      .then(([profile, experience, certificates, contact, social]) => {
        const allData = { profile, experience, certificates, contact, social };
        console.log("ALL DATA RECEIVED:", allData);
        setData(allData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err);
        setError(err);
        setLoading(false);
      });
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
      <ExperienceList data={data} />
      <Certificates data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
