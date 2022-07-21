import Animation from "./animation";
export default function Body() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Title
                </h1>
                <p className="mb-8 leading-relaxed">
                    모래뿐일 같이, 같이, 아름답고 그들은 뜨거운지라, 부패뿐이다.
                    영원히 있는 구하지 피어나는 철환하였는가? 찾아 인도하겠다는
                    설산에서 듣는다. 남는 사람은 영원히 눈에 봄날의 힘있다.
                    위하여 않는 구하기 석가는 위하여, 못할 따뜻한 있으랴? 인생을
                    바이며, 뭇 오아이스도 사랑의 것이다.보라, 두기 인생을 그들은
                    쓸쓸하랴? 청춘 그들은 찬미를 구하기 맺어, 주는 그들은
                    그리하였는가? 일월과 있는 듣기만 찬미를 사막이다. 피어나기
                    뼈 가슴에 위하여 때문이다. 인류의 자신과 사라지지
                    방황하여도, 하는 곳이 위하여서. 돋고, 착목한는 그들에게
                    청춘의 이 같지 우리 그들은 힘있다. 과실이 소리다.이것은 곳이
                    꽃이 원대하고, 평화스러운 속잎나고, 생생하며, 같지 있다.
                    없으면 아니한 그들에게 그들은 끓는 봄바람이다.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Go to Project
                    </button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}
