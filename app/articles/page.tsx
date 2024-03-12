import { fetchData } from '@/utils/useFetch'
import { FC } from 'react'
import { ArticleCard } from './components/ArticleCard'
import { stringify } from 'qs'

async function getArticles(): Promise<StrapiResponse<StrapiEntity<PopulatedArticleData>[]>> {
  const populateString = stringify({
    publicationState: 'preview',
    populate: {
      versions: {
        fields: '*',
      },
      tags: {
        fields: '*'
      }
    }
  })
  console.log("🚀 ~ getArticles ~ populateString:", populateString)
  const path = 'articles'
  const res = await fetchData(`${path}?${populateString}`)
  return res.json()
}

const ArticleList: FC = async () => {
  const res = await getArticles()
  return (
    <main className='flex flex-col justify-start items-start gap-2 rounded overflow-hidden'>
      {
        res.data.map(
          article => <ArticleCard key={article.id} article={article} />
        )
      }
    </main>
  )
}

export default ArticleList
