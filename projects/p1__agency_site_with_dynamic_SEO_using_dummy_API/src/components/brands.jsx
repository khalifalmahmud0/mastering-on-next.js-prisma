import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/mini/sectionHeader";

const Brands = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <SectionHeader heading={"Brands"} sub_heading={"Sub Brands"} />
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <Image
                                width={100}
                                height={100}
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/420x260"
                            />
                        </a>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <Link
                            href={"/"}
                            className="block relative h-48 rounded overflow-hidden"
                        >
                            <Image
                                width={100}
                                height={100}
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/421x261"
                            />
                        </Link>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <Link
                            href={'/'}
                            className="block relative h-48 rounded overflow-hidden"
                        >
                            <Image
                                width={100}
                                height={100}
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/422x262"
                            />
                        </Link>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <Link
                            href={"/"}
                            className="block relative h-48 rounded overflow-hidden"
                        >
                            <Image
                                width={100}
                                height={100}
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/423x263"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;