/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "@/i18n/routing";
import ArrowRight from "../icons/arrow-right";

const SingleFeedCardGrid = ({
    id,
    title,
    date_posted,
    image,
    category,
    author,
    description,
}: any) => {
    return (
        <div className="flex flex-col gap-3 sm:flex-row group">
            <div className="relative flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-64 rounded-lg sm:w-48"
                />
                <div className="absolute right-0 -rotate-90 translate-y-1/2 top-1/2">
                    <span className="px-3 py-1 text-white capitalize rounded-full bg-secondary">
                        {category}
                    </span>
                </div>
            </div>
            <div>
                <Link
                    href={`/blog/${id}`}
                    className="group-hover:text-primary transition-a"
                >
                    <h1 className="text-lg font-semibold capitalize">
                        {title}
                    </h1>
                </Link>
                <p className="mt-3 text-sm uppercase opacity-60">
                    by {author?.name}: {date_posted}
                </p>
                <p className="mt-2">{description.slice(0, 200)}...</p>
                <Link
                    href=""
                    className="mt-4 flex-align-center gap-x-2 hover:underline text-primary"
                >
                    <span className="uppercase hover:underline">read more</span>{" "}
                    <ArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default SingleFeedCardGrid;
