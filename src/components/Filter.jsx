export default function Filter(props) {
    

    return (
        <section
            ref={props.filterRef}
            className={`w-11/12 md:w-7/12 h-auto ${
                props.filterActive ? "visible opacity-1" : "opacity-0 invisible"
            } bg-dark dark:bg-light text-light dark:text-dark rounded-xl absolute top-24 right-0 p-4`}
        >
            <div className="w-5 h-5 bg-dark dark:bg-light absolute -top-4 right-5 rounded-t-full before:content('') before:w-2.5 before:h-2.5 before:bg-transparent before:absolute before:bottom-1 before:-left-2.5 before:rounded-full before:shadow-[5px_5px_0_rgb(21,19,24)] before:shadow-dark before:dark:shadow-light after:content('') after:w-2.5 after:h-2.5 after:bg-transparent after:absolute after:bottom-1 after:-right-2.5 after:rounded-full after:shadow-[-5px_5px_0_rgb(21,19,24)] after:shadow-dark after:dark:shadow-light"></div>
            
            <h3 className="font-black mb-5">Filter</h3>
            {props.children}
        </section>
    );
}
