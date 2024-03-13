import { Link } from "react-router-dom";

function Card(props) {
    return (
        <Link>
            <div className="w-full bg-dark dark:bg-light border aspect-video rounded-xl overflow-hidden mb-5">
                <img
                    src="https://i.ibb.co/Xj5BjPR/imgnotfound.png"
                    alt={props.alt}
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h2 className="w-fit text-dark/50 text-xl font-bold bg-gradient-to-br from-secondary from-15% to-primary to-85% bg-clip-text mb-1">
                    This Title Project
                </h2>
                <p className=" line-clamp-3 mb-3">
                    Ad labore consequat quis voluptate laborum cillum culpa id
                    nulla sunt deserunt Lorem aute. Adipisicing Lorem velit quis
                    ea consequat exercitation voluptate.
                </p>
            </div>
        </Link>
    );
}

export default Card;
