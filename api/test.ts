import { VercelRequest, VercelResponse } from "@vercel/node";
import { printSchema } from "graphql";

import schema from "../src/backend/schema";

export default async (req: VercelRequest, res: VercelResponse) => {
  return res.status(200).send(`<pre>${printSchema(schema)}</pre>`);
};
