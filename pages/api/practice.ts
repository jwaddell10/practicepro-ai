import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body, 'data from req body')
//   const id = await createItem(data)
//   res.status(200).json({ id })
res.status(200).json({ message: 'Data received successfully' })
}