export default function Button(props) {
    const gradient = "text-light bg-gradient-to-br from-secondary to-primary";
    const dark = "text-light dark:text-dark bg-dark dark:bg-light";

    return (
        <button
            type={props.btnType}
            onClick={props.btnClick}
            ref={props.btnRef}
            className={`min-w-10 min-h-10 flex items-center justify-center rounded-xl p-2 ${
                props.btnColor == "gradient" ? gradient : dark
            }`}
        >
            {props.children}
        </button>
    );
}
