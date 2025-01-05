"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionProps extends LinkProps {
  children: ReactNode;
  href: string;
  className: string;
}

function sleep(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");
    body?.classList.add("page-transition");

    await sleep(1000);
    console.log("eee");
    router.push(href);
    await sleep(1000);
    body?.classList.remove("page-transition");
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleTransition}
      {...props}
    >
      {children}
    </Link>
  );
}
