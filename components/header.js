import Image from "next/image";
import DarkModeToggleButton from "./home/dark-mode";
import Link from "next/link";
import NavBar from "./NavBar";
export default function Header({ name }) {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image
                        src="/software-developer.png"
                        alt=""
                        width="32"
                        height="32"
                    />
                    <Link href="/">
                        <button>
                            <span className="ml-3 text-xl">{name}</span>
                        </button>
                    </Link>
                </a>
                <NavBar />
                <DarkModeToggleButton />
            </div>
        </header>
    );
}
