"use client"

import { Button } from "@/components/ui/button"
import { useConfettiStore } from "@/hooks/useConfettiStore";
import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface CourseProgressButtonProps{
    courseId: string;
    chapterId: string;
    isCompleted?: boolean;
    nextChapterId?: string
}

export const  CourseProgressButton = ({
    courseId,
    chapterId,
    isCompleted,
    nextChapterId
} : CourseProgressButtonProps) => {
    const Icon = isCompleted ? XCircle : CheckCircle;
    const router = useRouter();
    const confetti = useConfettiStore();

    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try{
            setIsLoading(true);
            await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
                isCompleted: !isCompleted
            });

            if(!isCompleted && !nextChapterId){
                confetti.onOpen();
            }

            if(!isCompleted && nextChapterId){
                router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
            }

            toast.success("Progress updated.");
            router.refresh();
        }catch(error){
            toast.error("Something went wrong. Try again.")
            console.log(error);
        }finally{
            setIsLoading(false);
        }
    }
    return (
    <Button disabled={isLoading} onClick={onClick} type="button" variant={isCompleted ? "outline" : "success"} className="w-full md:w-auto ">
        {isCompleted ? "Not completed" : "Mark as complete"}
        <Icon className="h-4 w-4 ml-2"/>
        </Button>)
}