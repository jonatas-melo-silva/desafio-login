import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex h-11 w-full items-center justify-center gap-3 truncate rounded bg-emerald-600 p-3.5 text-base font-semibold text-white outline-none focus-within:ring-4 focus-within:ring-emerald-600 hover:bg-emerald-600/80 md:h-12 md:text-lg' as ClassNameValue
const dark = 'dark:text-gray-200' as ClassNameValue

export type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...props }: ButtonProps) {
  return <button className={twMerge(base, dark, className)} {...props} />
}
