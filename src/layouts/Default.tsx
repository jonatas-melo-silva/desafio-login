import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import Imagem from '../assets/imagem.svg'

const base =
  'flex min-h-screen w-full items-center justify-center bg-white text-gray-900 antialiased' as ClassNameValue

export type DefaultProps = ComponentProps<'div'>

export function Default({ className, ...props }: DefaultProps) {
  return (
    <div className={twMerge(base, className)} {...props}>
      <section className="hidden bg-green-50 lg:flex lg:min-h-screen lg:w-full lg:items-center lg:justify-center">
        <img src={Imagem} alt="imagem" />
      </section>
      <main className="flex w-full justify-center">{props.children}</main>
    </div>
  )
}
