"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get("/api/article");
        setArticles(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    }

    fetchArticles();
  }, []);
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
