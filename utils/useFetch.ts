export const fetchData = (...args: Parameters<typeof fetch>) => {
  const [url, options] = args
  console.log('🚀 ~ fetchData ~ url:', url)
  console.log('🚀 ~ fetchData ~ process.env.API_BASE:', process.env.API_BASE)
  return fetch(`${process.env.API_BASE}/${url}`, {
    ...options,
    cache: 'no-store',
    headers: {
      authorization: `bearer ${process.env.STRAPI_TOKEN}`,
    },
  })
}
