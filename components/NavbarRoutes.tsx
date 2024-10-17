"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  const isSearchPage = pathname === "/search"

  return (
    <>
    {isSearchPage && (
      <div className="hidden md:block">
        <SearchInput/>
      </div>
    )}
    <div className="ml-auto flex gap-x-2">
      {isTeacherPage || isPlayerPage ? (
        <Link href="/">
          <Button size={"sm"} variant={"ghost"}>
            Learn
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size={"sm"} variant={"ghost"}>
            Teach
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
    </>
  );
};
