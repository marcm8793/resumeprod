"use client";
import { NavMobile } from "./nav-mobile";
import { NavDesktop } from "./nav-desktop";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../ModeToggle";
import { useState } from "react";

export const Topbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={`container px-8 mx-auto justify-center items-center ${
        isOpen ? "fixed" : ""
      } bg-background`}
    >
      <nav className="flex items-start justify-between py-4">
        <NavMobile isOpen={isOpen} setOpen={setOpen} />
        <NavDesktop />
        <div className="justify-center items-center flex">
          <ModeToggle />
          <h2 className="text-2xl font-bold pl-4">MM</h2>
        </div>
      </nav>
      <Separator />
    </div>
  );
};
