import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-400">
          © {new Date().getFullYear()}
          <Link href="/">
            <Button variant="link">
              <p className="text-neutral-400">Marc Mansour.</p>
            </Button>{" "}
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/hqasmei" rel="noreferrer" target="_blank">
            <Linkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/hqasmei"
            rel="noreferrer"
            target="_blank"
          >
            <Twitter
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/hosnaqasmei/"
            rel="noreferrer"
            target="_blank"
          >
            <Github
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
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
};

export default Footer;
