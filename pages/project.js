import { NOTION_TOKEN, NOTION_ID } from "../config";
import ProjectItem from "../components/projects/project-item";
import Link from "next/link";
export default function Project({ projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-12 m-4 gap-8">
            {projects.results.map((proj) => (
                <ProjectItem key={proj.id} data={proj} />
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Notion-Version": "2022-02-22",
            "Content-Type": "application/json",
            Authorization: `Bearer ${NOTION_TOKEN}`,
        },
        body: JSON.stringify({ page_size: 100 }),
    };

    const res = await fetch(
        `https://api.notion.com/v1/databases/${NOTION_ID}/query`,
        options
    );
    const projects = await res.json();
    return {
        props: { projects },
    };
}
