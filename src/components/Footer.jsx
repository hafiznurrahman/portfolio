import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="w-screen h-auto border-t border-dark dark:border-light p-3 pb-24 md:pb-4 md:p-4 mt-5">
        
            <h2 className="text-2xl font-black mb-3">PORTFOLIO.</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3">
                <div>
                    <h2 className="text-lg font-bold">Navigation</h2>
                    <ul className="pl-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Project</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-bold">Social</h2>
                    <ul className="pl-1">
                        <li>
                            <Link
                                to="https://instagram.com/hfznr__"
                                target="_blank"
                            >
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://www.linkedin.com/in/hafiznurrahman"
                                target="_blank"
                            >
                                Linkedin
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://github.com/hafiznurrahman"
                                target="_blank"
                            >
                                Github
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
