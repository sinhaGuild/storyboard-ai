import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ConfigAtom } from "@/types/site";

export const SectionLayout = ({ sectionConfig, children, className }: { sectionConfig: ConfigAtom, children?: React.ReactNode, className?: string }) => {
    return (
        <div className={cn(
            "flex flex-col px-6 py-4 bg-white dark:bg-slate-950 justify-between",
            className
        )}>
            <SectionTitle sectionConfig={sectionConfig} />
            <Separator className="my-6" />
            {children}
        </div>
    )
}

export const SectionTitle = ({ sectionConfig }: { sectionConfig: ConfigAtom }) => {
    return (
        <>
            <HoverCard>
                <HoverCardTrigger><Label className="my-6 text-2xl tracking-wide uppercase" id="section-label">{sectionConfig.title}</Label></HoverCardTrigger>
                <HoverCardContent sideOffset={10} side="right" className="w-[24rem] bg-slate-800 text-slate-50 rounded-lg dark:bg-slate-100 dark:text-slate-800">
                    <p>{sectionConfig.description}</p>
                </HoverCardContent>
            </HoverCard>
        </>
    );
}