import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
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
          S &apos;enregistrer
        </Link>
      </>
    );
  }
  return (
    <>
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
