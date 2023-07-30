import bycrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { error } from "console";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const hashedPassword = await bycrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return NextResponse.json(user);
  } catch (err) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
