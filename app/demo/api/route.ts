import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return Response.json({keyA: 'value A'}, {
    headers: {
      'Set-Cookie': `xyz=abc`
    }
  })
}