"use client";
import { Separator } from "@radix-ui/react-dropdown-menu";
import ReactHtmlParser from "react-html-parser";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/article/${id}`);

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const article = await getData(params.id);
  return {
    title: article.article.title,
    description: article.article.description,
  };
}

const page = async ({ params }) => {
  const data = await getData(params.id);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <p className="justify-center flex text-3xl font-bold tracking-tight">
          {data.article.title}
        </p>
        <br />
        <p className="text-2xl">{data.article.description}</p>
        <br />
        <div>{ReactHtmlParser(data.article.content)}</div>
      </div>
    </>
  );
};

export default page;
