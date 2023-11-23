import Link from "next/link";

const menus = [
    {name: 'Home', path: '/'},
    {name: 'Team', path: '/team'},
    {name: 'Projects', path: '/projects'},
];
const Header = () => {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link
                        href={"/"}
                        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            strokeWidth={"2"}
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">AgenZ</span>
                    </Link>
                    <nav className="md:ml-auto  flex flex-wrap items-center text-base justify-center">
                        {menus.map((menu, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={menu?.path}
                                    className="mr-5 hover:text-gray-900"
                                >{menu?.name}</Link>
                            );
                        })}
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;