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
import { Recommendation } from '@/components/Recommendation/Recommendation';
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

        {/* <Reveal>
          <Services />
        </Reveal> */}
        <Reveal>
          <Projects />
        </Reveal>
        {/* <Reveal>
          <Experience />
        </Reveal> */}

        <Reveal>
          <Skills />
        </Reveal>
        {/* Wrapping id (not on the stepper's own section) so "Career" still
            scrolls to something visible on mobile, where the stepper is
            hidden — the wrapper's top then collapses to the timeline. */}
        <div id="career-route">
          <Reveal>
            <CareerRouteSteps />
          </Reveal>
          {/* No outer Reveal here — CareerRouteTimeline already fades in
              each row individually. Wrapping the whole (very tall) section
              in one Reveal made Framer Motion's amount:0.2 threshold nearly
              impossible to satisfy, leaving it stuck at opacity:0. */}
          <CareerRouteTimeline />
        </div>
        <Reveal>
          <Recommendation />
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
