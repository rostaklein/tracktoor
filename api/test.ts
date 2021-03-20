import { VercelRequest, VercelResponse } from "@vercel/node";


export default async (req: VercelRequest, res: VercelResponse) => {
  return res.status(200).json({hello: "Hello!", method: req.method});
};