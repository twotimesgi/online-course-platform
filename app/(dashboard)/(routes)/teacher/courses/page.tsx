import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { DataTable } from "./_components/DataTable";
import { columns } from "./_components/Columns";
 const CoursesPage = async () => {
    const {userId} = auth();
    if(!userId) return redirect("/");

    const courses = await db.course.findMany({
        where: {
            userId
        },
        orderBy:{
            createdAt: "desc"
        }
    })

    return <div className="p-6">
        <DataTable
            columns={columns}
            data={courses}/>
    </div>
}

export default CoursesPage;