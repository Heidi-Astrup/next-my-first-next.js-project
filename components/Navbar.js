"use client"; //this directive ensures the component runs on the client-side

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav>
      <Link href="/" className={pathName === "/" ? "active" : ""}>
        Home
      </Link>
      <Link href="/posts" className={pathName === "/posts" ? "active" : ""}>
        Posts
      </Link>
      <Link href="/users" className={pathName === "/users" ? "active" : ""}>
        Users
      </Link>
      <Link
        href="/posts/create"
        className={pathName === "/posts/create" ? "active" : ""}
      >
        Create Post
      </Link>
    </nav>
  );
}
