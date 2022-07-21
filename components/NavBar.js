import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
                <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/project">
                <a className="mr-5 hover:text-gray-900">Project</a>
            </Link>
        </nav>
    );
}
