"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchInput } from "./SearchInput";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search"

  return (
    <>
    {isSearchPage && (
      <div className="hidden md:block">
        <SearchInput/>
      </div>
    )}
    <div className="ml-auto flex gap-x-2">
      {isTeacherPage || isCoursePage ? (
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
      <span className="shrink-0 flex items-center">
      <UserButton 
      />
      </span>
    </div>
    </>
  );
};
