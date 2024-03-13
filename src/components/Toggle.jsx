import { useState, useEffect } from "react";

function Toggle() {
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
        <button
            className="w-9 h-5 block bg-dark rounded-full relative"
            id="btnToggle"
            onClick={handleToggle}
        >
            <span
                className={`w-4 h-4 block bg-light rounded-full transition-all absolute top-1/2 -translate-y-1/2 left-0.5 ${
                    darkMode ? "translate-x-full" : ""
                }`}
            ></span>
        </button>
    );
}

export default Toggle;
