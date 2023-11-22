import Link from "next/link";
import Image from "next/image";

const Brands = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
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
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                            <p className="mt-1">$16.00</p>
                        </div>
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
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                            <p className="mt-1">$21.15</p>
                        </div>
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
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                            <p className="mt-1">$12.00</p>
                        </div>
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
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                            <p className="mt-1">$18.40</p>
                        </div>
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
                                src="https://dummyimage.com/424x264"
                            />
                        </Link>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                            <p className="mt-1">$16.00</p>
                        </div>
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
                                src="https://dummyimage.com/425x265"
                            />
                        </Link>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                            <p className="mt-1">$21.15</p>
                        </div>
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
                                class="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/427x267"
                            />
                        </Link>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                            <p className="mt-1">$12.00</p>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <Link
                            href={"/"}
                            class="block relative h-48 rounded overflow-hidden"
                        >
                            <Image
                                width={100}
                                height={100}
                                alt="ecommerce"
                                class="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/428x268"
                            />
                        </Link>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                            <p className="mt-1">$18.40</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;