import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Link
        className={buttonVariants({ variant: "outline" })}
        href="/admin/signIn"
      >
        Se connecter
      </Link>
      <Link
        className={buttonVariants({ variant: "outline" })}
        href="/admin/signUp"
      >
        S'enregistrer
      </Link>
      <Link
        className={buttonVariants({ variant: "outline" })}
        href="/admin/editor"
      >
        Ecrire
      </Link>
    </>
  );
};

export default page;
