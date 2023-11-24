import Image from "next/image";
import SectionHeader from "@/components/mini/sectionHeader";
import Link from "next/link";
const fetchData = async (path) => {

    try {
        let fetching = await fetch(process.env.API_URL+path);
        return fetching.json();
    } catch (e) {
        throw new Error("Data Fetching Fail!");
    }
}
const Projects = async (props) => {
    let dataType = props?.type === 'featured' ? 'FeaturedProject' : 'AllProject';
    let data = await fetchData(dataType);
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <SectionHeader heading={"projects"} sub_heading={"Sub projects"} />
                <div className="flex flex-wrap -m-4">
                    {data?.map((item,index) => {
                        return (
                            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                                <Link href={item?.live ? item?.live : "#"} >
                                <div className="flex relative">
                                    {/*src="https://dummyimage.com/600x360"*/}
                                    <Image
                                        width={600}
                                        height={360}
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={item?.image ? item?.image : 'https://dummyimage.com/600x360'}
                                    />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                            {item?.remark ? item?.remark : 'No remark'}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {item?.title ? item?.title : 'No Title'}
                                        </h1>

                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;