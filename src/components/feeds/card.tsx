/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

const SingleFeedCardGrid = async ({
    id,
    title,
    image,
    category,
    description,
}: any) => {
    const t = await getTranslations();
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
                <p className="mt-2">{t(description)}</p>
            </div>
        </div>
    );
};

export default SingleFeedCardGrid;
