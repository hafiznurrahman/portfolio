export default function Tag({ index, text }) {
    return (
        <span
            className={`w-fit h-auto capitalize font-bold text-sm  ${
                index % 2 == 0
                    ? "text-primary bg-primary/20"
                    : "text-secondary bg-secondary/20"
            } rounded-xl py-0.5 px-3`}
        >
            {text}
        </span>
    );
}
