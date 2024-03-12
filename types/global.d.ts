declare type Tag = {
  name: string
  value: string
}

declare type MenuItem = {
  name: string,
  path: string
}

declare type FirstLevelMenuItem = MenuItem & {
  second_level_menus: BatchPopulatedEntity<MenuItem>
}

declare type MenuData = StrapiEntity<{
  entries: BatchPopulatedEntity<FirstLevelMenuItem>
}>