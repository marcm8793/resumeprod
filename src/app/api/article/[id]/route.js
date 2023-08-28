import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//! 1. GET article by id
export async function GET(request, { params }) {
  const { id } = params;
  const article = await prisma.article.findUnique({
    where: {
      id: id,
    },
  });
  return NextResponse.json({ article });
}
