import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const responseTxt = 'Hello, Next.js!'

  return new Response(responseTxt)
}