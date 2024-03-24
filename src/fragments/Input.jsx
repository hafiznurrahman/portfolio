
export default function Input(props) {
    return (
        <input
            id={props.id}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            className="w-full caret-secondary text-light dark:text-dark bg-dark dark:bg-light outline-none rounded-xl p-2"
        />
    );
}
