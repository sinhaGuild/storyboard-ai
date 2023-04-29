"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import * as React from "react"

import { ComboBoxType } from "@/App"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { updateCh1, updateCh2, updatePlot } from "@/features/input/inputSlice"
import { useAppDispatch } from "@/hooks/redux-hooks"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { ComboBoxItemInterface } from "@/types/presets"

export function CommandCombobox({ frameworks, type }: { frameworks: ComboBoxItemInterface[], type: ComboBoxType }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const dispatch = useAppDispatch()
    const { toast } = useToast()

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between w-full"
                >
                    {value
                        ? frameworks.find((framework) => framework.label.toLowerCase() === value.toLowerCase())?.label
                        : "Select Preset..."}
                    <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Search preset..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {frameworks.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                    switch (type) {
                                        case 'plot':
                                            toast({
                                                title: "Plot Changed",
                                                description: `${framework.label}`,
                                            })
                                            dispatch(updatePlot(framework.value))
                                            break;
                                        case 'ch1':
                                            toast({
                                                title: "Character 1 Changed",
                                                description: `${framework.label}`,
                                            })
                                            dispatch(updateCh1(framework.value))
                                            break;
                                        case 'ch2':
                                            toast({
                                                title: "Character 2 Changed",
                                                description: `${framework.label}`,
                                            })
                                            dispatch(updateCh2(framework.value))
                                            break;
                                        default:
                                            break;
                                    }
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === framework.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {framework.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
