import SingleFeedCardGrid from "./card";

const Feeds = () => {
    return (
        <div className="pt-10 pb-16" id="blog">
            <div className="text-center">
                <h1 className="mx-auto sub-heading">blog post</h1>
                <h1 className="heading">latest newsfeeds</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
                {feeds.slice(0, 4).map((feed) => (
                    <SingleFeedCardGrid key={feed.id} {...feed} />
                ))}
            </div>
        </div>
    );
};

export default Feeds;

const feeds = [
    {
        id: 1,
        title: "Agency Is the capacity of an actor to act in a given..",
        date_posted: "january 29, 2023",
        image: "/images/blog/blog (1).jpg",
        category: "architecture",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
    {
        id: 2,
        title: "Agency Is the capacity of an actor to act in a given..",
        date_posted: "january 29, 2023",
        image: "/images/blog/blog (2).jpg",
        category: "architecture",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
    {
        id: 3,
        title: "Agency Is the capacity of an actor to act in a given..",
        date_posted: "january 29, 2023",
        image: "/images/blog/blog (3).jpg",
        category: "interior",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
    {
        id: 4,
        title: "Agency Is the capacity of an actor to act in a given..",
        date_posted: "january 29, 2023",
        image: "/images/blog/blog (4).jpg",
        category: "architecture",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
    {
        id: 5,
        title: "Agency Is the capacity of an actor to act in a given..",
        date_posted: "january 29, 2023",
        image: "/images/blog/blog (5).jpg",
        category: "interior",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
    {
        id: 6,
        title: "Agency Is the capacity of an actor to act in a given..",
        date_posted: "january 29, 2023",
        image: "/images/blog/blog (6).jpg",
        category: "architecture",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
    {
        id: 7,
        title: "Agency Is the capacity of an actor to act in a given..",
        date_posted: "january 29, 2023",
        image: "/images/blog/blog (7).jpg",
        category: "architecture",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
    {
        id: 8,
        title: "Agency Is the capacity of an actor to act in a given..",
        date_posted: "january 29, 2023",
        image: "/images/blog/blog (8).jpg",
        category: "architecture",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
    {
        id: 9,
        title: "Agency Is the capacity of an actor to act in a given..",
        date_posted: "january 29, 2023",
        image: "/images/blog/blog (9).jpg",
        category: "architecture",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
        author: {
            name: "Wabweni Brian",
            avatar: "/images/avatar.png",
        },
    },
];
