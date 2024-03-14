import { Helmet } from "react-helmet";

export default function Meta({
    title,
    description,
    keywords,
    author,
    urlPage,
    thumbnail
}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={thumbnail} />
            <meta property="og:url" content={urlPage} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={thumbnail} />
<meta property="twitter:card" content="summary_large_image"/>
        </Helmet>
    );
}
