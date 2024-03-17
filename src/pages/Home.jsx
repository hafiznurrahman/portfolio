import { Link } from "react-router-dom";
import { PiStarFourFill, PiInfoFill } from "react-icons/pi";
import { data } from "../services/dataDummy.js";
import LineChart from "../components/LineChart.jsx";
import Meta from "../components/Meta.jsx";
import Avatar from "../fragments/Avatar.jsx";

function Home() {
    return (
        <>
            <Meta
                title="Homepage - hafiznurrahman"
                description="in occaecat irure eiusmod minim cillum amet sint dolor laboris"
                keywords="portfolio, hafiz nur rahman, home, about, projects, frontend, developer"
                urlPage={window.location.href}
                thumbnail="https://i.ibb.co/MBYmzVJ/portfolio-thumbnail.png"
            />

            <section className="w-11/12 h-auto text-light dark:text-dark bg-dark dark:bg-light rounded-xl rounded-bl-none overflow-hidden my-5 md:mt-0 mx-auto relative">
                <div>
                    <div className="w-80 h-auto bg-secondary/25 aspect-square rounded-full blur-3xl absolute -top-40 -left-40 pointer-events-none"></div>
                    <div className="w-80 h-auto bg-primary/25 aspect-square rounded-full blur-3xl absolute -bottom-40 -right-40 pointer-events-none"></div>
                </div>
                <div className="flex flex-col gap-5 p-4">
                    <h1 className="text-5xl font-black z-10">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.profiles.role
                            }}
                        />
                    </h1>
                    <p className="w-full md:w-3/5 border-l-2 border-primary px-2 z-20">
                        Welcome Everyone, This is my portfolio site, Built with
                        ReactJs, TailwindCss and ChartJs. To explore my
                        portfolio site click the Explore Now button below or use
                        navigation menu.
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
                            <span className="text-lg font-black">
                                {data.profiles.experience}
                            </span>
                            <span className="text-xs italic">Experience</span>
                        </small>

                        <small className="flex flex-col items-center justify-center border-l-2 border-l-secondary px-2.5">
                            <span className="text-lg font-black">
                                {data.projects.length}
                            </span>
                            <span className="text-xs italic">Projects</span>
                        </small>
                    </div>
                </div>
            </section>

            <section className="w-11/12 mx-auto pt-2 mb-5" id="Explore">
                <div className="w-28 h-28 bg-dark dark:bg-light rounded-2xl float-left mr-2">
                    <Avatar imgSrc="/site_logo.png" imgAlt="site logo HNR" />
                </div>
                
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data.profiles.description
                        }}
                    />
                
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
