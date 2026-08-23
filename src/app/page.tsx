import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { Stats } from '@/components/Stats/Stats';
// import { IntroBanner } from "@/components/IntroBanner/IntroBanner";
import { Mission } from '@/components/Mission/Mission';
import { Services } from '@/components/Services/Services';
import { Projects } from '@/components/Projects/Projects';
import { CareerRouteSteps } from '@/components/CareerRoute/CareerRouteSteps';
import { CareerRouteTimeline } from '@/components/CareerRoute/CareerRouteTimeline';
// import { Experience } from "@/components/Experience/Experience";
import { Education } from '@/components/Education/Education';
import { Skills } from '@/components/Skills/Skills';
// import { Languages } from "@/components/Languages/Languages";
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';
import { Reveal } from '@/components/Reveal/Reveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <Stats />
        </Reveal>
        {/* <IntroBanner /> */}
        <Reveal>
          <Mission />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <CareerRouteSteps />
        </Reveal>
        <Reveal>
          <CareerRouteTimeline />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        {/* <Reveal>
          <Experience />
        </Reveal> */}
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
