import { number } from "astro/zod";
import Card from "./Card"

type PostListProps = {
    articles: {
        slug: string;
        data: {
          title: string;
          publishDate: Date;
          snippet: string;
          tags: string[];
          image: {
            src: string;
            alt?: string;
          };
        };
      }[];
      number: number;
}

const PostList = ({ articles, number }: PostListProps) => {

    for(let i = 0; i < articles.length; i++) {
        if(i > (number-1)) {
          articles.pop();
          console.log(i)
        }
      }

      

    return (
<div className="flex flex-col gap-16">
    {articles.map((article, index) => (
        <Card key={index} title={article.data.title}  body={article.data.snippet} date={article.data.publishDate} href={article.slug}/>
    ))}
</div>
    ) 
}

export default PostList