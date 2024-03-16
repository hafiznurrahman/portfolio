import { Link } from "react-router-dom";
import Meta from "../components/Meta.jsx";

function NotFound() {
    return (
        <>
            <Meta 
            title="404 Page Not Found" 
            description="in occaecat irure eiusmod minim cillum amet sint dolor laboris" 
            keywords="portfolio, hafiz nur rahman, 404, page, not found" 
            urlPage={window.location.href} 
            thumbnail="https://i.ibb.co/MBYmzVJ/portfolio-thumbnail.png" 
            />
            
            <section className="w-full min-h-screen flex flex-col items-center justify-center gap-5 text-lg text-center p-3">
                <img
                    src="/page_not_found.svg"
                    alt="page not found"
                    className="w-full md:w-7/12 landscape:w-7/12"
                />
                <h1 className="text-5xl text-secondary font-black">
                    Page Not Found
                </h1>
                <p>Sorry, we couldn’t find the page you’re looking for. </p>
                <Link to="/" className="underline">
                    Back To Home
                </Link>
            </section>
        </>
    );
}

export default NotFound;
