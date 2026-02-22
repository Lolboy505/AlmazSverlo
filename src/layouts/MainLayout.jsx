import { Outlet } from 'react-router-dom'
import Footer from '@footer/Footer.jsx'
import Header from "@header/Header.jsx"
import ScrollToTop from "@/components/additional/jsx/ScrollToTop"
import Cookie from "@/components/cookie/Cookie.jsx"

const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
            <Cookie />
        </>
    );
};

export default MainLayout;