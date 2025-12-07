import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;

  if (!token || typeof token !== "string") {
    return res.status(400).json({ message: "Invalid token" });
  }

  // Redirect to the frontend reset-password page with the token as a query parameter
  res.redirect(302, `/auth/reset-password?token=${token}`);
}
