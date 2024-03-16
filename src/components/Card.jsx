import { Link } from "react-router-dom";
import Tag from "../components/Tag.jsx";

function Card({ img, alt, title, description, tags }) {
    const tagsArr = tags.split(",");

    return (
        <Link to={`?detail=${title}`}>
            <div className="w-full bg-dark dark:bg-light border border-dark dark:border-light aspect-video rounded-xl overflow-hidden mb-5">
                <img
                    src={img}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>

            <div>
                <h2 className="w-fit text-dark/50 text-xl font-bold bg-gradient-to-br from-secondary from-15% to-primary to-85% bg-clip-text mb-1">
                    {title}
                </h2>

                <p className=" line-clamp-3 mb-3">{description}</p>

                <ul className="w-full flex flex-wrap gap-3">
                    {tagsArr.map((tag, index) => {
                        return (
                            <li key={index}>
                                <Tag text={tag} index={index} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Link>
    );
}

export default Card;
