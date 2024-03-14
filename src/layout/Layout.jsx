import { SpeedInsights } from "@vercel/speed-insights/react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Layout() {
    return (
        <>
            <ScrollRestoration />
            <Navbar />
            <main className="w-full md:w-11/12 min-h-screen md:pt-24 mx-auto">
                <Outlet />
            </main>
            <Footer />
            <SpeedInsights />
        </>
    );
}
export default Layout;
