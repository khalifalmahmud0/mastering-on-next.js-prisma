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
            <div className='mt-12 mb-24'>
                <Hero />
            </div>
            <div className='mb-24'>
                <Statistics/>
            </div>
            <div className='mb-24'>
                <Service/>
            </div>
            <div className='mb-24'>
                <Projects/>
            </div>
            <div className='mb-24'>
                <Brands/>
            </div>
            {/*<Team/>*/}
            {/*<Testimonial/>*/}
        </>
    );
}
