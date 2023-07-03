import { serialize } from 'cookie'
import {
  NextApiRequest,
  NextApiResponse
} from "next"

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const serialized = serialize('user', '', {
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  })
  res.setHeader('Set-Cookie', serialized)

  return res.json({
    status: true,
  })
}