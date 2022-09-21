import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ status: 405, message: "Only POST method allowed" });
  const { email, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return res.status(400).json({ error: "user exist" });
  }

  const salt = await bcrypt.genSalt(10, "a");
  const hashedPassword = await bcrypt.hash(password, salt);

  if (!existingUser) {
    try {
      const newUser = await prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
        },
      });
      if (newUser) {
        return res.status(201).json(newUser);
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === "P2002") {
          console.log(
            "There is a unique constraint violation, a new user cannot be created with this email"
          );
          return res.status(400).json({ error: "user not created" });
        }
      }
    }
  }
}
