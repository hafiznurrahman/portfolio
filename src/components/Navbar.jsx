import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../services/dataDummy.js";
import Toggle from "../fragments/Toggle.jsx";

function Navbar() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("toggle") === "true" ? true : false
    );

    useEffect(() => {
        localStorage.setItem("toggle", darkMode);
        document
            .querySelector("html")
            .setAttribute("class", darkMode ? "dark" : "light");
    }, [darkMode]);

    function handleToggle() {
        setDarkMode(active => !active);
    }

    return (
        <nav className="w-11/12 md:w-6/12 h-fit bg-dark/5 backdrop-blur fixed left-1/2 bottom-4 md:top-4 -translate-x-1/2 rounded-xl p-2 z-[998]">
            <ul className="w-full flex items-center justify-evenly gap-2 bg-light text-dark/50 font-semibold rounded-xl py-2">
                {data.navigation.map((page, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={page.path}>{page.title}</NavLink>
                        </li>
                    );
                })}
                <li>
                    <Toggle btnClick={handleToggle} btnActive={darkMode} />
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
