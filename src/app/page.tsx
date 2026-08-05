import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
// import { IntroBanner } from "@/components/IntroBanner/IntroBanner";
import { Mission } from "@/components/Mission/Mission";
// import { Services } from "@/components/Services/Services";
import { Projects } from "@/components/Projects/Projects";
import { Experience } from "@/components/Experience/Experience";
import { Skills } from "@/components/Skills/Skills";
// import { Languages } from "@/components/Languages/Languages";
import { Background } from "@/components/Background/Background";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Reveal } from "@/components/Reveal/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <IntroBanner /> */}
        <Reveal>
          <Mission />
        </Reveal>
        {/* <Services /> */}
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Background />
        </Reveal>
        {/* <Reveal>
          <Education />
        </Reveal> */}
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
