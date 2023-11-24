import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import Statistics from "@/components/statistics";
import Service from "@/components/service";
import Projects from "@/components/projects";
import Brands from "@/components/brands";
import WorkList from "@/components/workList";

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
                <WorkList/>
            </div>
            <div className='mb-24'>
                <Service/>
            </div>
            <div className='mb-24'>
                <Projects type={"featured"} />
            </div>
            <div className='mb-24'>
                <Testimonial/>
            </div>
            <div className='mb-24'>
                <Brands/>
            </div>
        </>
    );
}
