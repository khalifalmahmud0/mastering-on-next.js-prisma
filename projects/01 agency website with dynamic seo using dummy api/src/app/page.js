import Hero from "@/components/hero";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";
import Statistics from "@/components/statistics";
import Contact from "@/components/contact";
import Service from "@/components/service";
import Projects from "@/components/projects";
import Brands from "@/components/brands";

export default function Home() {
    return (
        <>
            <Hero/>
            <Statistics/>
            <Service/>
            <Projects/>
            <Brands/>
            <Contact/>
            <Team/>
            <Testimonial/>

        </>
    );
}
