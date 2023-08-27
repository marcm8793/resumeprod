import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { json } from "stream/consumers";

//! POST create a new post
export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const body = await req.json();
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    const article = await prisma.article.create({
      data: {
        content: body.content,
        authorId: user.id,
      },
    });
    console.log(article);
    return new Response({ message: "Created successfully", article });
  } catch (error) {
    console.error(error);
  }
  return new Response(null, { status: 500 });
}

export async function GET(req) {
  try {
    const articles = await prisma.article.findMany();

    return new Response(JSON.stringify(articles));
  } catch (error) {
    console.error(error);
    return new Response("An error occurred", { status: 500 });
  }
}
