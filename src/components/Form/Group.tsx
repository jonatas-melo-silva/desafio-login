import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'flex w-full flex-col gap-3' as ClassNameValue

export type GroupProps = ComponentProps<'div'>

export function Group({ className, ...props }: GroupProps) {
  return <div className={twMerge(base, className)} {...props} />
}
