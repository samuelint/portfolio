import { twMerge } from "tailwind-merge"

interface Props {
  className?: string
}

export default function HorizontalSeparator({ className }: Props) {
  return (
    <div className={twMerge('border-t border-slate-300', className)}></div>
  )
}
