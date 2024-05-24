import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";


interface Props extends PropsWithChildren {
    className?: string
}

export function Badge({ children, className }: Props) {
  return (
    <span className={twMerge('bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded whitespace-nowrap', className)}>{children}</span>
  )
}

