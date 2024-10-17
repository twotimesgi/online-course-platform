import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Chapter, Course, UserProgress } from "@prisma/client";
import { redirect } from "next/navigation";
import { NavbarRoutes } from "@/components/NavbarRoutes";
import { CourseMobileSidebar } from "./CourseMobileSiderbar";

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}
export const CourseNavbar =  async ({
  course,
  progressCount,
}: CourseNavbarProps) => {
  const { userId } = auth();

  if (!userId) redirect("/");

  const purchase = await db.purchase.findUnique({
    where: {
        userId_courseId:{
            userId,
            courseId: course.id
        }
    }
  })
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
        <CourseMobileSidebar
        course={course}
        progressCount={progressCount}
        />
        <NavbarRoutes />
    </div>
  )
};
