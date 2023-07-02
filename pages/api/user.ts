import {
  NextApiRequest,
  NextApiResponse
} from "next"
import { verify } from 'jsonwebtoken'

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method == 'GET') {
      const { user }: any = req.cookies

      if(user) {
        const thisUser: any = verify(user, 'Pokemonoma')
        
        return res.json({
          data: {
            status: true,
            data: {
              email: thisUser.email,
              name: thisUser.username
            }
          }
        })
      }
      return res.json({
        status: false,
        message: 'no user found'
      })
    }
    return res.json({
      status: false,
      message: 'Invalid request'
    })
}