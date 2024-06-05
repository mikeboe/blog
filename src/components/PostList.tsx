import Card from "./Card"

type PostListProps = {
    articles: {
        title: string;
        body: string;
        date: string;
        href: string;
    }[]
}

const PostList = ({ articles }: PostListProps) => {
    return (
<div className="flex flex-col gap-16">
    {articles.map((article, index) => (
        <Card key={index} title={article.title}  body={article.body} date={article.date} href={article.href}/>
    ))}
</div>
    ) 
}

export default PostList