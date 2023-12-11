import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import Imagem from '../assets/imagem.svg'

const base =
  'flex min-h-screen w-full items-center justify-center bg-white text-gray-900 antialiased' as ClassNameValue

export type DefaultProps = ComponentProps<'div'>

export function Default({ className, ...props }: DefaultProps) {
  return (
    <div
      className={twMerge(base, 'text-slate-200 dark:bg-zinc-950', className)}
      {...props}
    >
      <section className="hidden bg-green-50 dark:bg-green-950 lg:flex lg:min-h-screen lg:w-full lg:items-center lg:justify-center lg:p-8 xl:p-0">
        <img className="flex-shrink object-cover" src={Imagem} alt="imagem" />
      </section>
      <main className="flex w-full justify-center">{props.children}</main>
    </div>
  )
}
