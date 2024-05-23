import { ProgressBar } from 'lib/components/progress-bar'
import { ReactNode } from 'react'

type WeightedItem = {
  name: string
  weight?: number
}

type WeightItemsProps = {
  title: ReactNode
  items: WeightedItem[]
}

export function WeightedtItemsSection({ title, items }: WeightItemsProps) {
  return (
    <div className='flex flex-col gap-4 text-white bg-slate-500 p-6 rounded-lg w-full my-2'>
      <h3 style={{ margin: '0'}}>{title}</h3>
      {items.map((item) => (<WeightedtItem key={item.name} item={item}/>))}
    </div>
  )
}

type WeightItemProps = {
  item: WeightedItem
}

export function WeightedtItem({ item }: WeightItemProps) {
  return (
    <div className='flex justify-between items-center w-full'>
      <span className={'w-1/2 pr-2'}>{item.name}</span>
      <ProgressBar 
        className={'w-1/2 bg-slate-400 dark:bg-slate-200'}
        barClassName='bg-slate-600 dark:bg-slate-500'
        value={item.weight ?? 100}
      />
    </div>
  )
}