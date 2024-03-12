'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useCallback, useEffect, useState } from 'react'

const getMenuData = async (): Promise<StrapiResponse<MenuData>> => {
  const path = 'menu/api'
  const res = await fetch(`${path}`)
  return res.json()
}

export const Menu: FC = () => {
  const [menu, setMenu] = useState<MenuData>()
  const getMenu = useCallback(async () => {
    const res = await getMenuData()
    setMenu(res.data)
  }, [])
  useEffect(() => {
    getMenu()
  }, [getMenu])
  return (
    <nav className="p-4 flex justify-center gap-4 border-b border-b-slate-300">
      {menu?.attributes.entries.data.map((i) => <MenuItem key={i.id} menuData={i} />)}
    </nav>
  )
}

const MenuItem: FC<{ menuData: StrapiEntity<FirstLevelMenuItem> }> = ({ menuData }) => {
  const pathname = usePathname()
  const isActive = pathname.includes(menuData.attributes.path)
  return (
    <div className="group relative cursor-pointer font-serif">
      <Link href={menuData.attributes.path}>
        {isActive ? (
          <div className="text-blue-500 group p-1 cursor-pointer text-2xl">
            {menuData.attributes.name}
          </div>
        ) : (
          <div className="group p-1 cursor-pointer text-2xl">
            {menuData.attributes.name}
          </div>
        )}
      </Link>
      <div className="group h-1 w-full bg-slate-400 opacity-0 group-hover:opacity-100 transition duration-500"></div>
      {menuData.attributes.second_level_menus.data.length ? (
        <div
          className="
          absolute p-4 top-full left-1/2 -translate-x-1/2 w-max
          group group-hover:visible group-hover:opacity-100 invisible
          transition opacity-0 duration-500 rounded-md bg-white flex flex-col gap-4 items-center"
        >
          {menuData.attributes.second_level_menus.data.map((i) => (
            <div className="hover:underline font-bold" key={i.id}>
              {i.attributes.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
