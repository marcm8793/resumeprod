import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const Footer = () => (
  <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
    <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
    <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
      <div className="flex flex-row items-center justify-center space-x-1 text-neutral-400">
        © {new Date().getFullYear()} - Marc Mansour
      </div>
      <p className="text-neutral-400 text-center">
        &nbsp;Made with 🖥️ & Nextjs.
      </p>
      <div className="flex flex-row items-center justify-center space-x-2 mb-1">
        <a
          href="https://www.linkedin.com/in/marc-mansour-1b938496/"
          rel="noreferrer"
          target="_blank"
        >
          <Linkedin
            className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
            size={30}
          />
        </a>
        <a
          href="https://twitter.com/Marc87240"
          rel="noreferrer"
          target="_blank"
        >
          <Twitter
            className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
            size={30}
          />
        </a>

        <a href="https://github.com/marcm8793" rel="noreferrer" target="_blank">
          <Github
            className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
            size={30}
          />
        </a>
        <a
          href="mailto:marcmansour@outlook.fr"
          rel="noreferrer"
          target="_blank"
        >
          <Mail
            className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
            size={30}
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
