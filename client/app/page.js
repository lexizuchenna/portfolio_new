"use client";

import { Header, About, Work, Skills, Testimonials, Footer } from "@/container";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </>
  );
}
