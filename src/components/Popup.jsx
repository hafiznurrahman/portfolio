import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

function Popup() {
    const [popup, setPopup] = useState(
        sessionStorage.getItem("popup") == "false" ? false : true
    );

    useEffect(() => {
        sessionStorage.setItem("popup", popup);
    }, [popup]);

    function hidePopup() {
        setPopup(active => !active);
    }

    return (
        <section
            className={`w-screen h-screen flex items-center justify-center bg-dark/80 fixed top-0 left-0 z-[999] transition-all duration-300 ${
                popup ? "visible opacity-1" : "opacity-0 invisible"
            }`}
        >
            <div className="w-10/12 h-auto landscape:w-1/3 aspect-square relative">
                <div
                    className="w-10 h-10 flex items-center justify-center text-xl text-light bg-gray-700 absolute -top-1 -right-1 rounded-tr-xl rounded-bl-xl"
                    onClick={hidePopup}
                >
                    <IoClose />
                </div>
                <div className="w-full h-full bg-light p-3 rounded-3xl">
                    <img
                        src="/undraw_welcome_cats_thqn.svg"
                        alt="Wellcome"
                        className="w-full h-full pointer-events-none select-none"
                    />
                </div>
            </div>
        </section>
    );
}
export default Popup;
