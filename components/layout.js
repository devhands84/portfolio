import Header from "../components/header";
import Footer from "../components/footer";
export default function Layout({ children }) {
    return (
        <div>
            <Header name="Develong's 포트폴리오" />
            {children}
            <Footer description="목록이 더 많아지길..." />
        </div>
    );
}
