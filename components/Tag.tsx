import { FC } from "react"

export const Tag: FC<{ tag: StrapiEntity<Tag> }> = ({ tag }) => {
  return (
    <div className="text-xs bg-green-400 text-white rounded px-2 py-1 inline-block m-1">{tag.attributes.name}</div>
  )
}