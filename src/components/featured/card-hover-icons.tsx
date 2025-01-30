import Eye2 from "../icons/eye2";
import Heart from "../icons/heart";
import Star from "../icons/star";

const CardHoverIcons = () => {
    return (
        <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:block gap-x-3">
            <div className="text-white flex-align-center gap-x-2">
                <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
                    <Heart />
                </div>
                <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
                    <Eye2 />
                </div>
                <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
                    <Star />
                </div>
            </div>
        </div>
    );
};

export default CardHoverIcons;
