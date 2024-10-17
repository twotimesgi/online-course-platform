"use client"

import axios from "axios"
import MuxPlayer from "@mux/mux-player-react"
import { useState } from "react"
import toast from "sonner"
import { useRouter } from "next/navigation"
import { Loader2, Lock } from "lucide-react"

import { cn } from "@/lib/utils"
import { useConfettiStore } from "@/hooks/useConfettiStore"

interface VideoPlayerProps{
    playbackId: string,
    courseId: string,
    chapterId: string,
    nextChapterId?: string,
    isLocked: boolean,
    title: string,
    completeOnEnd: boolean
}

export const VideoPlayer = ({playbackId, courseId, chapterId, nextChapterId, isLocked, title, completeOnEnd}: VideoPlayerProps) => {
    const [isReady, setIsReady] = useState(false);


    return (<div className="relative aspect-video">
        {!isReady && !isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                <Loader2 className="h-8 w-8 animate-spin text-secondary"/>
            </div>
            )}
        {isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-secondary flex-col gap-y-2">
            <Lock className="h-8 w-8" />
            <p className="text-sm">This chapter is locked.</p>
        </div>
        )}
        {!isLocked && (
            <MuxPlayer 
            className={cn(
                !isReady && "hidden"
            )}
            onCanPlay={() => setIsReady(true)}
            onEnded={() => {}}
            autoPlay
            playbackId={playbackId}
            title={title}
            />
        )}
    </div>)
}