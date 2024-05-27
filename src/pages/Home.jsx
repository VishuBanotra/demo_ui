import React, { useEffect } from "react";
import Header from "../components/ui/Header.jsx";
import Landing from "../components/ui/Landing.jsx";
import Landing_2 from "../components/ui/Landing_2.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Header />

      <div data-aos="fade-up">
        <Landing />
      </div>

      <Landing_2 />
    </div>
  );
}
