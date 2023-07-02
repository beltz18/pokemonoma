import data          from './data.json'
import { compare }   from 'bcrypt'
import jwt           from 'jsonwebtoken'
import { serialize } from 'cookie'
import type {
  NextApiRequest,
  NextApiResponse
} from 'next'
import type {
  LoginResponse
} from '@a/types'

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  try {
    if (req.method == 'POST') {
      const { email, password } = req.body
      if (email === data.email) {
        compare(password, data.password, async (err, r) => {
          if (err) throw err
          if (r) {
            const token = jwt.sign({
              exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
              email,
              username: 'Pokemonoma User'
            }, 'Pokemonoma')

            const serialized = serialize('user', token, {
              sameSite: 'strict',
              maxAge: 1000 * 60 * 60 * 24,
              path: '/',
            })
            res.setHeader('Set-Cookie', serialized)

            return res.json({
              status: true,
              message: "Logged In, being redirected..."
            })
          }
          return res.json({
            status: false,
            message: "Incorrect password"
          })
        })
      } else return res.json({
        status: false,
        message: "Incorrect email"
      })
    } else return res.json({
      status: false,
      message: 'Method not allowed'
    })
  } catch (err) { console.log(err) }
}