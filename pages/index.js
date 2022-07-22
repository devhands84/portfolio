import Body from "../components/home/body";
import Seo from "../components/Seo";
export default function Home() {
    return (
        <>
            <Seo titie="Portfolio-Home" />
            <section className="flex min-h-screen flex-col items-center jestify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <Body />
                </div>
            </section>
        </>
    );
}
