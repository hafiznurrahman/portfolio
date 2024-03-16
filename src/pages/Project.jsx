import { useState } from "react";
import { IoSearch, IoFilter } from "react-icons/io5";
import Card from "../components/Card.jsx";
import Tag from "../components/Tag.jsx";
import Meta from "../components/Meta.jsx";
import { data } from "../services/dataDummy.js";

function Project() {
    const [filterActive, setFilterActive] = useState(false);

    function handleFilter() {
        setFilterActive(active => !active);
    }

    return (
        <>
            <Meta
                title="Projects - hafiznurrahman"
                description="in occaecat irure eiusmod minim cillum amet sint dolor laboris"
                keywords="portfolio, hafiz nur rahman, home, about, projects, frontend, developer"
                urlPage={window.location.href}
                thumbnail="https://i.ibb.co/MBYmzVJ/portfolio-thumbnail.png"
            />

            <section className="w-11/12 md:w-8/12 flex items-center justify-center gap-4 bg-dark/5 backdrop-blur fixed left-1/2 -translate-x-1/2 top-3 md:top-24 rounded-xl p-3 mx-auto">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full caret-secondary text-light dark:text-dark bg-dark dark:bg-light outline-none rounded-xl p-2"
                />
                <button className="w-10 h-10 flex items-center justify-center aspect-square text-gray-50 bg-gradient-to-br from-secondary to-primary rounded-xl p-2">
                    <IoSearch />
                </button>
                <button
                    className="w-10 h-10 flex items-center justify-center aspect-square text-light dark:text-dark bg-dark dark:bg-light rounded-xl p-2"
                    onClick={handleFilter}
                >
                    <IoFilter />
                </button>
                <Filter
                    display={
                        filterActive
                            ? "visible opacity-1"
                            : "opacity-0 invisible"
                    }
                />
            </section>

            <section className="w-full h-auto pt-20">
                <h1 className="text-2xl font-bold pl-3 mb-3">My Projects</h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-3">
                    {data.projects.map(project => {
                        return (
                            <li key={project.id}>
                                <Card
                                    img={project.image}
                                    alt={project.title}
                                    title={project.title}
                                    description={project.description}
                                    tags={project.tags}
                                />
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}

function Filter({ display }) {
  
    let allTags = [];
    
    data.projects.forEach(projectTags => {
        let projectTag = projectTags.tags.split(",");
        allTags = allTags.concat(projectTag);
    });
    
    const tagsFilter = [...new Set(allTags)];

    return (
        <section
            className={`w-11/12 md:w-7/12 h-auto  ${display} bg-dark dark:bg-light text-light dark:text-dark rounded-xl absolute top-24 right-0 p-4`}
        >
            <div className="w-5 h-5 bg-dark dark:bg-light absolute -top-4 right-5 rounded-t-full before:content('') before:w-2.5 before:h-2.5 before:bg-transparent before:absolute before:bottom-1 before:-left-2.5 before:rounded-full before:shadow-[5px_5px_0_rgb(21,19,24)] before:shadow-dark before:dark:shadow-light after:content('') after:w-2.5 after:h-2.5 after:bg-transparent after:absolute after:bottom-1 after:-right-2.5 after:rounded-full after:shadow-[-5px_5px_0_rgb(21,19,24)] after:shadow-dark after:dark:shadow-light"></div>

            <h3 className="font-black mb-5">Filter</h3>
            <ul className="w-full flex flex-wrap gap-3">
                {tagsFilter.map((filter, index) => {
                    return (
                        <li key={index}>
                            <Tag text={filter} index={index} />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Project;
