"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface Article {
  id: number;
  title: string;
  description: string;
  created_at: string;
  createdAt: string;
}

const page = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("/api/article")
      .then((response) => setArticles(response.data))
      .catch((error) =>
        console.error("Erreur lors du chargement des articles :", error)
      );
  }, []);

  const sortedArticles = articles.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div className="container p-5">
      <h1 className="font-bold">Articles</h1>
      {sortedArticles
        .map((article) => (
          <div key={article.id}>
            <div className="flex justify-between items-center">
              <div className="p-2 flex flex-col">
                <Link href={`/blog/${article.id}`}>
                  <h2 className="font-bold">{article.title}</h2>
                </Link>
                <p>{article.description}</p>
              </div>
              <div className="text-right">
                Published on{" "}
                <span>{new Date(article.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
            <Separator />
          </div>
        ))
        .reverse()}
    </div>
  );
};

export default page;
