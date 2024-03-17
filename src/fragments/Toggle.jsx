export default function Toggle(props) {
    return (
        <button
            className="w-9 h-5 block bg-dark rounded-full relative"
            id="btnToggle"
            onClick={props.btnClick}
        >
            <span
                className={`w-4 h-4 block bg-light rounded-full transition-all absolute top-1/2 -translate-y-1/2 left-0.5 ${
                    props.btnActive ? "translate-x-full" : ""
                }`}
            ></span>
        </button>
    );
}
