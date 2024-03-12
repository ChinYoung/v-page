import { stringify } from 'qs'

export async function GET() {
  const res = await fetch(`${process.env.API_BASE}/articles`)
  return Response.json({
    a: 222,
  })
}
