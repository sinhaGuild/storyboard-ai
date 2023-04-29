import { cn } from "@/lib/utils"

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md dark:bg-slate-600 bg-slate-300", className)}
            {...props}
        />
    )
}

export { Skeleton }
