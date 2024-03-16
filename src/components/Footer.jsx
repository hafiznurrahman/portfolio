import { Link } from "react-router-dom";
import { data } from "../services/dataDummy.js";

function Footer() {
    return (
        <footer className="w-screen h-auto border-t border-dark dark:border-light p-3 pb-24 md:pb-4 md:p-4 mt-5">
            <h2 className="text-2xl font-black mb-3">PORTFOLIO.</h2>

            <div className="grid grid-cols-2 md:grid-cols-3">
                <div>
                    <h2 className="text-lg font-bold">Navigation</h2>
                    <ul className="pl-1">
                        {data.navigation.map((page, index) => {
                            return (
                                <li key={index}>
                                    <Link to={page.path}>{page.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-bold">Social</h2>
                    <ul className="capitalize pl-1">
                        {data.profiles.socialMedia.map(sosmed => {
                            return (
                                <li key={sosmed.id}>
                                    <Link to={sosmed.link} target="_blank">
                                        {sosmed.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
