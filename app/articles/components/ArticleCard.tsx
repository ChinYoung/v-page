import { Tag } from '@/components/Tag'
import Link from 'next/link'
import { FC } from 'react'

export const ArticleCard: FC<{ article: StrapiEntity<PopulatedArticleData> }> = ({ article }) => {
  return (
    <div className='px-4 py-2'>
      <div className='flex items-center gap-4'>
        <Link href={`articles/${article.id}`}>
          <div className="text-2xl font-semibold underline text-cyan-700">{article.attributes.title}</div>
        </Link>
        <div>
          {
            article.attributes.tags.data.map(tag => <Tag tag={tag} key={tag.id} />)
          }
        </div>
      </div>
      <div className='text-xs opacity-50'>{article.attributes.createdAt}</div>
      <div className='pt-4 w-[120%]   border-b border-blue-200'></div>
    </div>
  )
}
