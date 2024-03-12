import { fetchData } from "@/utils/useFetch"
import { stringify } from "qs"
import { FC } from "react"
import { ArticleContent } from "../components/ArticleDetail"
type PopulatedTags = {
  tags: BatchPopulatedEntity<Tag>
}

async function getArticleDetail(
  id: string,
): Promise<StrapiResponse<StrapiEntity<Article & PopulatedTags>>> {
  const populateString = stringify({
    publicationState: 'preview',
    populate: ['versions', 'tags'],
  })
  const res = await fetchData(`articles/${id}?${populateString}`)
  return res.json()
}

const Article: FC<{ params: { id: string } }> = async ({ params: { id } }) => {
  const articleDetail = await getArticleDetail(id)
  console.log(articleDetail.data.attributes.content)

  return <ArticleContent article={articleDetail.data} />
}
export default Article