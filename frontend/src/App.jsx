import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SupportForm from "./components/SupportForm";
import RequestSummary from "./components/RequestSummary";
import Footer from "./components/Footer";

function App() {
  const [summary, setSummary] = useState(null);

  return (
    <div className="min-h-screen bg-[#f7faf9] text-[#173b3a]">
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <SupportForm onAnalysis={setSummary} />
        {summary && (
          <RequestSummary data={summary} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;