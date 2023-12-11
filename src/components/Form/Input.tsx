import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

const base =
  'flex w-full items-center gap-2 truncate rounded border border-gray-200 bg-slate-50 p-4 text-base font-normal outline-none placeholder:text-neutral-500 focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/20' as ClassNameValue
const dark = 'dark:border-zinc-600 dark:bg-zinc-800' as ClassNameValue

export type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
  return <input className={twMerge(base, dark, className)} {...props} />
}
