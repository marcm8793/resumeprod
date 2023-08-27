import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" container flex flex-col text-center items-center justify-center my-10 py-10 md:flex-row md:text-left">
        <div className="md:mt-2 md:w-1/2 items-center justify-center flex ">
          <Image
            src="/pexels-norway.jpg"
            alt="photo norway"
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-1/2">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Marc!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Project Manager in Finance{" "}
            </span>
            based in Paris. Working towards creating software that makes life
            easier and more meaningful.
          </p>
          <Link
            href="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
            Projects
          </Link>
        </div>
      </div>
    </>
  );
}
