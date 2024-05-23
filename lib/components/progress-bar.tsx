import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";


interface Props {
  value: number
  minValue?: number
  maxValue?: number
  className?: string
  barClassName?: string
}

export function ProgressBar({ value, minValue = 0, maxValue = 100, className, barClassName }: Props) {
  return (
    <div className={twMerge('flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700', className)} role="progressbar" aria-valuenow={value} aria-valuemin={minValue} aria-valuemax={maxValue}>
      <div className={twMerge('flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-500 bg-blue-600 dark:bg-blue-500', barClassName)} style={{ width: `${value/(maxValue-minValue) * 100}%` }}></div>
    </div>
  )
}
