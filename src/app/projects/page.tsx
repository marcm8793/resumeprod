import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightSquare, Github } from "lucide-react";
const projects = [
  {
    name: "Personnal Website",
    description:
      "Website to describe my projects and my experience as a developper.",
    image: "/portfolio2.png",
    github: "https://github.com/marcm8793/resumeprod",
    link: "/",
  },
  {
    name: "NextApps",
    description: "Your productivity dashboard.",
    image: "/nextapps2.png",
    github: "https://github.com/marcm8793/todonextprod",
    link: "https://www.nextapps.dev/",
  },
];

const page = () => {
  return (
    <div className="container">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={500}
                      height={500}
                      className="rounded-xl shadow-xl hover:opacity-70 border"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <Github
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <ArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
