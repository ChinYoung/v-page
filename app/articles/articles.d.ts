declare type Article = {
  title: string,
  content: string
}

declare type PopulatedArticleData = Article & {
  tags: BatchPopulatedEntity<Tag>
}