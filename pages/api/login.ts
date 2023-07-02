import data        from './data.json'
import { compare } from 'bcrypt'
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
        compare(password, data.password, (err, r) => {
          if (err) throw err
          if (r) return res.json({ status: true, message: "Logged In, being redirected..." })
          return res.json({ status: false, message: "Incorrect password" })
        })
      } else res.json({ status: false, message: "Incorrect email" })
    }
  } catch (err) { console.log(err) }
}