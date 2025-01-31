/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTranslations } from "next-intl/server";
import QuoteRight from "../icons/quote-right";
const TestimonialCard = async ({ reviewText, name, image, role }: any) => {
    const t = await getTranslations();
    return (
        <div className="card flex-1 basis-[16rem] relative">
            <div className="absolute opacity-10 text-9xl top-0 left-0">
                <QuoteRight />
            </div>
            <p>{t(reviewText)}</p>
            <div className="mt-3 flex gap-x-3">
                <img
                    src={image}
                    alt={name}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <h1 className="font-semibold capitalize">{name}</h1>
                    <p className="text-sm capitalize">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
