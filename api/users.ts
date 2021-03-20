import { VercelRequest, VercelResponse } from "@vercel/node";

import { PrismaClient } from ".prisma/client";
const prisma = new PrismaClient();

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const users = await prisma.user.findMany({
      include: { posts: true },
    });

    return res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
