import { FC } from "react";
import parse from "html-react-parser";

export const ArticleContent: FC<{article: StrapiEntity<Article>}> = ({article: {attributes: {content, title, createdAt}}}) => {
  return (
    <div>
      <div className="text-3xl font-bold">{title}</div>
      <div className="text-xs opacity-50">{createdAt}</div>
      <div className="pb-4"></div>
      <div>
        {parse(content)}
      </div>
    </div>
  )
}