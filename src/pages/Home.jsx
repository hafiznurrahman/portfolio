import { Link } from "react-router-dom";
import { PiStarFourFill, PiInfoFill } from "react-icons/pi";
import LineChart from "../components/LineChart.jsx";
//import Meta from "../components/Meta.jsx";
import {Helmet} from "react-helmet"
function Home() {
    return (
        <>
            <Helmet>
                <title>Homepage - hafiznurrahman</title>
                <meta
                    name="description"
                    content="officia mollit aliqua et deserunt quis labore cillum veniam aute"
                />
                <meta
                    name="keywords"
                    content="protfolio, hafiz nur rahman, about"
                />
                <meta name="author" content="Hafiz Nur Rahman" />
                <meta property="og:title" content="Homepage - hafiznurrahman" />
                <meta
                    property="og:description"
                    content="officia mollit aliqua et deserunt quis labore cillum veniam aute"
                />
                <meta property="og:image" content="/portfolio_thumbnail.png" />
                <meta property="og:url" content={window.location.href} />
                <meta
                    name="twitter:title"
                    content="Homepage - hafiznurrahman"
                />
                <meta
                    name="twitter:description"
                    content="officia mollit aliqua et deserunt quis labore cillum veniam aute"
                />
                <meta name="twitter:image" content="/portfolio_thumbnail.png" />
                <meta property="twitter:card" content="summary_large_image" />
            </Helmet>
            <header className="flex items-center justify-center gap-3 bg-dark text-light font-semibold dark:text-dark dark:bg-light p-3 mb-4">
                <PiInfoFill />
                Still In Development Stage
            </header>
            <section className="w-11/12 h-auto text-light dark:text-dark bg-dark dark:bg-light rounded-xl rounded-bl-none overflow-hidden my-5 md:mt-0 mx-auto relative">
                <div>
                    <div className="w-80 h-auto bg-secondary/25 aspect-square rounded-full blur-3xl absolute -top-40 -left-40 pointer-events-none"></div>
                    <div className="w-80 h-auto bg-primary/25 aspect-square rounded-full blur-3xl absolute -bottom-40 -right-40 pointer-events-none"></div>
                </div>
                <div className="flex flex-col gap-5 p-4">
                    <h1 className="text-5xl font-black z-10">
                        Frontend
                        <br />
                        Developer
                    </h1>
                    <p className="w-full md:w-3/5 border-l-2 border-primary px-2 z-20">
                        non amet sit dolore aute mollit ipsum id excepteur minim
                        laborum culpa incididunt cupidatat pariatur incididunt
                        in consequat Lorem sit
                    </p>
                    <Link
                        to="#Explore"
                        className="w-fit flex items-center text-gray-50 font-semibold bg-gradient-to-br from-primary to-secondary  rounded-full py-1 px-3 hover:translate-x-1 transition-all z-30"
                    >
                        <PiStarFourFill />
                        Explore Now
                    </Link>
                </div>
                <div className="w-fit h-auto bg-light dark:bg-dark pt-4 pr-4 rounded-tr-xl relative before:content-('') before:w-5 before:h-5 before:bg-transparent before:absolute before:-top-5 before:left-0 before:shadow-[-10px_10px_0_#000000] before:shadow-light dark:before:shadow-dark before:rounded-full after:content-('') after:w-5 after:h-5 after:bg-transparent after:absolute after:bottom-0 after:-right-5 after:shadow-[-10px_10px_0_#000000] after:shadow-light dark:after:shadow-dark after:rounded-full ">
                    <div className="flex bg-dark dark:bg-light rounded-md py-2">
                        <small className="flex flex-col items-center justify-center border-l-2 border-l-primary px-2.5">
                            <span className="text-lg font-black">1+ Year</span>
                            <span className="text-xs italic">Experience</span>
                        </small>

                        <small className="flex flex-col items-center justify-center border-l-2 border-l-secondary px-2.5">
                            <span className="text-lg font-black">50</span>
                            <span className="text-xs italic">Projects</span>
                        </small>
                    </div>
                </div>
            </section>
            <section className="w-11/12 mx-auto pt-2 mb-5" id="Explore">
                <img
                    src="/site_logo.png"
                    alt="site logo HNR"
                    className="w-28 h-28 bg-dark dark:bg-light float-left rounded-lg mr-2 select-none"
                />
                <p className="">
                    Minim nostrud velit qui sunt Lorem ea id voluptate
                    reprehenderit. Elit officia ullamco adipisicing eiusmod
                    labore Lorem aliquip eiusmod enim fugiat aliqua. Aliquip ut
                    fugiat consequat deserunt deserunt qui nisi irure amet ea
                    consectetur. Commodo incididunt irure sit ullamco et nulla
                    magna mollit veniam non Lorem. Magna sunt elit anim
                    consectetur Lorem veniam excepteur ullamco cupidatat. Nisi
                    ex occaecat nisi commodo amet eu. Dolore sit ut velit enim
                    veniam. Voluptate Lorem do cupidatat fugiat nulla consequat
                    labore dolor excepteur irure.
                </p>
            </section>
            <section className="w-11/12 grid items-center grid-cols-1 md:grid-cols-2 landscape:grid-cols-2 gap-5 clear-both mx-auto mb-5">
                <div>
                    <h2 className="text-3xl font-black mb-3">
                        Popular Technology In My Project
                    </h2>
                    <p>
                        Anim aliquip nulla dolor laborum dolor quis fugiat
                        deserunt do sit nostrud sint qui enim. Qui aliquip
                        laborum irure exercitation do aute dolore nostrud sint.
                        Ut minim aliquip voluptate mollit incididunt elit do
                        aliqua sunt commodo sit ipsum. Qui nulla labore nulla
                        reprehenderit pariatur id anim. Officia ullamco
                        adipisicing dolore ea eu occaecat reprehenderit duis
                        quis.
                    </p>
                </div>
                <div className="w-full h-auto overflow-x-auto hidden-thumb-scroll">
                    <div>
                        <LineChart />
                    </div>
                </div>
            </section>
            <section></section>
        </>
    );
}
export default Home;
