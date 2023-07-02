import {
  NextApiRequest,
  NextApiResponse
} from "next"
import { verify } from 'jsonwebtoken'

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { user }: any = req.cookies

    if(user) {
      const thisUser: any = verify(user, 'Pokemonoma')
      
      return res.json({
        data: {
          email: thisUser.email,
          name: thisUser.username
        }
      })
    }
    return res.json({
      message: 'nothing'
    })
  } catch (err) { console.log(err) }
}