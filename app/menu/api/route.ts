import { fetchData } from '@/utils/useFetch'
import { stringify } from 'qs'

export async function GET() {
  const populateString = stringify({
    populate: {
      entries: {
        populate: ['second_level_menus'],
      },
    },
  })
  const path = 'menu'
  console.log('🚀 ~ getMenuData ~ populateString:', populateString)
  const res = await fetchData(`${path}?${populateString}`)
  console.log('🚀 ~ GET ~ res:', res)
  return res
}
