import parse from "html-react-parser";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/article/${id}`);

  if (!res.ok) {
    return { message: "There was an error." };
  }
  return res.json();
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const article = await getData(params.id);
  return {
    title: article.article.title,
    description: article.article.description,
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  if (!data) {
    return <div>Loading...</div>;
  }

  const localDate = new Date(data.article.createdAt).toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  return (
    <>
      <div className="container my-10">
        <p className="justify-center flex text-3xl font-bold tracking-tight">
          {data.article.title}
        </p>
        <br />
        <div className="flex justify-between items-center">
          <p className="text-2xl">{data.article.description}</p>
          <div className="text-right">
            Published on <span>{localDate}</span>
          </div>
        </div>

        <br />
        <div>{parse(data.article.content)}</div>
      </div>
    </>
  );
};

export default page;
