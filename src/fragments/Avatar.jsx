export default function Avatar(props) {
    return (
        <img
            src={props.imgSrc}
            alt={props.imgAlt}
            className="w-full h-full select-none hover:grayscale transition-all duration-500"
        />
    );
}
