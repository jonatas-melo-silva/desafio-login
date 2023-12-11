import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base = 'text-sm font-normal md:text-lg' as ClassNameValue

export type LabelProps = ComponentProps<'label'>

export function Label({ className, ...props }: LabelProps) {
  return <label className={twMerge(base, className)} {...props} />
}
