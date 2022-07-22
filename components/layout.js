import Header from "../components/header";
import Footer from "../components/footer";
export default function Layout({ children }) {
    return (
        <div>
            <Header name="Develong's 포트폴리오" />
            {children}
            <Footer />
        </div>
    );
}
