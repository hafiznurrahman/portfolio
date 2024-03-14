import { NavLink } from "react-router-dom";
import Toggle from "../components/Toggle.jsx";

function Navbar() {
    
    return (
        <nav className="w-11/12 md:w-6/12 h-fit bg-dark/5 backdrop-blur fixed left-1/2 bottom-4 md:top-4 -translate-x-1/2 rounded-xl p-2 z-[999]">
            <ul className="w-full flex items-center justify-evenly gap-2 bg-light text-dark/50 font-semibold rounded-xl py-2">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <Toggle />
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
