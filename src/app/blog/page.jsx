"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const page = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("/api/article")
      .then((response) => setArticles(response.data))
      .catch((error) =>
        console.error("Erreur lors du chargement des articles :", error)
      );
  }, []);

  return (
    <div>
      <h1>Liste des articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <Link href={`/blog/${article.id}`}>
            <div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
