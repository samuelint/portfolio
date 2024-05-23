import { ReactNode } from "react"

export type TimelineItem = {
  label?: ReactNode
  title: ReactNode
  content?: ReactNode
}

type Props = {
  items: TimelineItem[]
}

type LeftContentProps = {
  content?: ReactNode
}
function LeftContent({ content }: LeftContentProps) {
  return (
    <div className="w-16 text-end">
      <span className="text-xs text-gray-500">{ content }</span>
    </div>
  )
}

function TimelineDotIcon() {
  return (
    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
      <div className="relative z-10 size-7 flex justify-center items-center">
        <div className="size-2 rounded-full bg-gray-400"></div>
      </div>
    </div>
  )
}

type RightContentProps = {
  title: ReactNode
  content?: ReactNode
}
function RightContent({ title, content }: RightContentProps) {
  return (
    <div className="grow pt-0.5 pb-8">
    <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
      { title }
    </h3>
    { content }
  </div>
  )
}

export function Timeline({ items }: Props) {
  return (
    <div>
      { items.map((item) => (
        <div key={`${item.label}-${item.title}`} className="flex gap-x-3">
          <LeftContent content={item.label} />
          <TimelineDotIcon />
          <RightContent title={item.title} content={item.content} />
      </div>
      )) }
    </div>
  )
}
