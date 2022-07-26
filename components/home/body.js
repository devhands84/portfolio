import Animation from "./animation";
import Link from "next/link";
export default function Body() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    김휘철의 Side Projects
                </h1>
                <p className="mb-8 leading-relaxed">
                    안녕하세요 개발자 김휘철입니다.
                    <br /> 여기는 저의 Side projects를 소개하는 곳입니다. <br />{" "}
                    업무는 주로 .Net C#, Oracle을 사용해 개발하지만 시간있을때는
                    Web, Mobile, Unity를 공부합니다. <br /> Web은 React,
                    Next.js, Vue.js, Firebase,를 사용하여 개발 합니다. Mobile은
                    React native를 사용중이고, Unity는 아직 시작하진 않았지만
                    관심있습니다.
                </p>
                <div className="flex justify-center">
                    <Link href="/project">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Go Project List
                        </button>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}
