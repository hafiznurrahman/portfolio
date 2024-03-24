import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { IoSearch, IoFilter } from "react-icons/io5";
import { data } from "../services/dataDummy.js";
import Card from "../components/Card.jsx";
import Meta from "../components/Meta.jsx";
import Filter from "../components/Filter.jsx";
import Button from "../fragments/Button.jsx";
import Input from "../fragments/Input.jsx";
import Tag from "../fragments/Tag.jsx";

function Project() {
    const handleSearch = () => {
        let inputSearch = document.querySelector("#search");
        if (inputSearch.value !== "") {
            alert("MSG: " + inputSearch.value.toLowerCase());
            inputSearch.value = "";
        }
    };

    const [filterActive, setFilterActive] = useState(false);
    const filterRef = useRef(null);
    const btnFilterRef = useRef(null);

    function handleFilter() {
        setFilterActive(active => !active);
        console.log(btnFilterRef);
    }

    document.addEventListener("click", e => {
        if (
            btnFilterRef.current &&
            !btnFilterRef.current.contains(e.target) &&
            filterRef.current &&
            !filterRef.current.contains(e.target)
        ) {
            setFilterActive(false);
        }
    });

    let allTags = [];
    data.projects.forEach(projectTags => {
        let projectTag = projectTags.tags.replace(/\s/g, "").split(",");
        allTags = allTags.concat(projectTag);
    });
    const tagsFilter = [...new Set(allTags)];

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
                <Input
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Search"
                />
                <Button
                    btnType="submit"
                    btnColor="gradient"
                    btnClick={handleSearch}
                >
                    <IoSearch />
                </Button>

                <Button
                    btnType="button"
                    btnClick={handleFilter}
                    btnRef={btnFilterRef}
                    btnColor="dark"
                >
                    <IoFilter />
                </Button>

                <Filter filterRef={filterRef} filterActive={filterActive}>
                    <ul className="w-full flex flex-wrap gap-3 select-none">
                        {tagsFilter.map((filter, index) => {
                            return (
                                <li key={index}>
                                    <Tag text={filter} index={index} />
                                </li>
                            );
                        })}
                    </ul>
                </Filter>
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

export default Project;
