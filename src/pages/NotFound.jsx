import { Link } from "react-router-dom";
//import Meta from "../components/Meta.jsx";
import { Helmet } from "react-helmet";
function NotFound() {
    return (
        <>
            <Helmet>
                <title>404 Page Not Found</title>
                <meta
                    name="description"
                    content="officia mollit aliqua et deserunt quis labore cillum veniam aute"
                />
                <meta
                    name="keywords"
                    content="protfolio, hafiz nur rahman, 404, Not Found"
                />
                <meta name="author" content="Hafiz Nur Rahman" />
                <meta property="og:title" content="404 Page Not Found" />
                <meta
                    property="og:description"
                    content="officia mollit aliqua et deserunt quis labore cillum veniam aute"
                />
                <meta property="og:image" content="/portfolio_thumbnail.png" />
                <meta property="og:url" content={window.location.href} />
                <meta
                    name="twitter:title"
                    content="404 Page Not Found"
                />
                <meta
                    name="twitter:description"
                    content="officia mollit aliqua et deserunt quis labore cillum veniam aute"
                />
                <meta name="twitter:image" content="/portfolio_thumbnail.png" />
                <meta property="twitter:card" content="summary_large_image" />
            </Helmet>
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
