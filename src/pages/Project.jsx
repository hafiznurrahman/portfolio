import { IoSearch, IoFilter } from "react-icons/io5";
import Card from "../components/Card.jsx";

function Project() {
    return (
        <>
            <section className="w-11/12 md:w-8/12 flex items-center justify-center gap-4 bg-dark/20 backdrop-blur fixed left-1/2 -translate-x-1/2 top-3 md:top-24 rounded-xl p-3 mx-auto">
                <input
                    type="text"
                    placeholder="Search Project"
                    className="w-full caret-secondary text-light bg-dark dark:bg-light outline-none rounded-xl p-2"
                />
                <button className="w-10 h-10 flex items-center justify-center aspect-square text-gray-50 bg-gradient-to-br from-secondary to-primary rounded-xl p-2">
                    <IoSearch />
                </button>
                <button className="w-10 h-10 flex items-center justify-center aspect-square text-light dark:text-dark bg-dark dark:bg-light rounded-xl p-2">
                    <IoFilter />
                </button>
            </section>
            <section className="w-full h-auto pt-20">
                <h1 className="text-2xl font-bold pl-3 mb-3">My Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </>
    );
}
export default Project;
