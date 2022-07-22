import Head from "next/head";
export default function Seo({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Develong Portfolio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
