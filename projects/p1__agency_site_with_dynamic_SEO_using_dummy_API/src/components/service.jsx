import SectionHeader from "@/components/mini/sectionHeader";
const fetchData = async () => {

    try {
        let fetching = await fetch(process.env.API_URL+'AllService');
        return fetching.json();
    } catch (e) {
        throw new Error("Data Fetching Fail!");
    }
}
const Service = async () => {
    let data = await fetchData();
    return (
        <section id="service" className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <SectionHeader heading={"service"} sub_heading={"Sub service"} />
                <div className="flex flex-wrap -m-4">
                    {data?.map((item,index) => {
                        return (
                            <div key={index} className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-12 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        {item?.tag ? item?.tag : 'No Tag'}
                                    </h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                        {item?.title ? item?.title : 'No Title:'}
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        {item?.des ? item?.des : 'No Des:'}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Service;