const fetchData = async () => {

    try {
        let fetching = await fetch(process.env.API_URL+'WorkList');
        return fetching.json();
    } catch (e) {
        throw new Error("Data Fetching Fail!");
    }
}
const WorkList = async () => {
    let data = await fetchData();

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    {data?.map((item,index) => {
                        return (
                            <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-gray-700">Step</span>
                                    <span className="mt-1 text-gray-500 text-sm">
                                        {item?.step ? item?.step : '0'}
                                    </span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                                        {item?.title ? item?.title : 'No Title'}
                                    </h2>
                                    <p className="leading-relaxed">
                                        {item?.des ? item?.des : 'No Des'}
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

export default WorkList;