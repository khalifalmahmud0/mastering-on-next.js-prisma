import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/mini/sectionHeader";
const fetchData = async () => {
    try {
        let fetching = await fetch(process.env.API_URL+'BrandList');
        return fetching.json();
    } catch (e) {
        throw new Error("Data Fetching Fail!");
    }
}
const Brands = async () => {
    let data = await fetchData();
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <SectionHeader heading={"Brands"} sub_heading={"Sub Brands"} />
                <div className="flex flex-wrap -m-4">
                    {data?.map((item,index) => {
                        return (
                            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <Image
                                        width={420}
                                        height={260}
                                        alt={item?.name ? item?.name : 'Brand Image'}
                                        className="object-none w-full h-full block"
                                        src={item?.image ? item?.image : 'https://dummyimage.com/420x260'}
                                    />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Brands;