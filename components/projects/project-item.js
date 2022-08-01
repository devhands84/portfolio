import Image from "next/image";

export default function ProjectItem({ data }) {
    const title = data.properties.Name.title[0].plain_text;
    const github = data.properties.Github.url;
    const description = data.properties.Description.rich_text[0].plain_text;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const siteURL = data.properties.URL.url;
    const tags = data.properties.Tags.multi_select;
    const NotionUrl = data.properties.NotionUrl.url;

    return (
        <div className="project-card">
            <div>
                <Image
                    className="rounded-t-xl"
                    src={imgSrc}
                    alt="cover image"
                    width="100%"
                    height="50%"
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={siteURL}>Site</a>
                <a href={github}>Github</a>
                <a href={NotionUrl}>Notion site</a>
                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <h1
                            className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
                            key={aTag.id}
                        >
                            {aTag.name}
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    );
}
