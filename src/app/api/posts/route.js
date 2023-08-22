import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

//! POST create a new post
export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }
    const { title, content } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    const post = await prisma.post.create({
      data: {
        title: title,
        content: JSON.stringify(content),
        authorId: user.id,
      },
    });

    return new Response(JSON.stringify(post));
  } catch (error) {
    console.error(error);
  }
  return new Response(null, { status: 500 });
}
