import Link from "next/link";
import { routes } from "./routes";
import { Button } from "../ui/button";

export const NavDesktop = () => {
  return (
    <div className="hidden md:flex md:items-center text-sm">
      {routes.map((route, key) => {
        const { Icon, href, title } = route;
        return (
          <Link
            href={href}
            key={title}
            target={href === "Resume" ? "_blank" : "_self"}
          >
            <Button variant="ghost">
              <Icon />

              {title}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};
