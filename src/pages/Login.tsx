import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import IconGoogle from '../assets/icon.png'

const base =
  'flex min-h-screen w-full items-center justify-center p-6 md:p-8 2xl:p-0' as ClassNameValue

export type LoginProps = ComponentProps<'section'>

export function Login({ className, ...props }: LoginProps) {
  return (
    <section className={twMerge(base, className)} {...props}>
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-16">
        <div className="flex w-full flex-col items-start justify-center gap-10">
          <div className="flex w-full flex-col justify-start gap-2 md:gap-3">
            <span className="text-base font-medium md:text-xl">
              Bem-vindo de volta
            </span>
            <h1 className="text-2xl font-semibold md:text-3xl">
              Faça login na sua conta
            </h1>
          </div>

          <form
            className="flex w-full flex-col items-start justify-center gap-14"
            action=""
          >
            <fieldset className="flex w-full flex-col gap-6">
              <div className="flex w-full flex-col gap-8">
                <div className="flex w-full flex-col gap-3">
                  <label
                    className="text-sm font-normal md:text-lg"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    className="flex w-full items-center gap-2 truncate rounded border border-gray-200 bg-slate-50 p-4 text-base font-normal outline-none placeholder:text-neutral-500 focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/20 dark:border-zinc-600 dark:bg-zinc-800"
                    placeholder="exemplo@gmail.com"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="flex w-full flex-col gap-3">
                  <label
                    className="text-sm font-normal md:text-lg"
                    htmlFor="password"
                  >
                    Senha
                  </label>
                  <input
                    className="flex w-full items-center gap-2 truncate rounded border border-gray-200 bg-slate-50 p-4 text-base font-normal outline-none placeholder:text-neutral-500 focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-600/20 dark:border-zinc-600 dark:bg-zinc-800"
                    placeholder="0123456789"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </div>

              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  <input
                    className="rounded bg-slate-50 outline-none focus-within:ring-4 focus-within:ring-emerald-600 dark:active:bg-emerald-400"
                    type="radio"
                    name="lembre-de-mim"
                    id="lembre-de-mim"
                  />
                  <label
                    className="text-sm font-medium md:text-base"
                    htmlFor="lembre-de-mim"
                  >
                    Lembre de mim
                  </label>
                </div>
                <a
                  className="rounded text-sm font-medium text-emerald-600 outline-none focus-within:ring-4 focus-within:ring-emerald-600 dark:text-emerald-400 md:text-base"
                  href="#"
                >
                  Esqueceu a senha?
                </a>
              </div>
            </fieldset>

            <div className="flex w-full flex-col items-center justify-center gap-6">
              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-3 truncate rounded bg-emerald-600 p-3.5 text-base font-semibold text-white outline-none focus-within:ring-4 focus-within:ring-emerald-600 hover:bg-emerald-600/80 dark:text-gray-200 md:h-12 md:text-lg"
              >
                Entrar na conta
              </button>
              <button
                type="button"
                className="flex h-11 w-full items-center justify-center gap-3 truncate rounded bg-gray-900 p-3.5 text-base font-semibold text-white outline-none focus-within:ring-4 focus-within:ring-emerald-600 hover:bg-gray-900/80 dark:bg-gray-900 dark:text-gray-200 md:h-12 md:text-lg"
              >
                <img
                  className="h-4 w-4 md:h-6 md:w-6"
                  src={IconGoogle}
                  alt="Google"
                />
                {''}
                Ou faça login com o Google
              </button>
            </div>
          </form>
        </div>

        <span className="text-center text-base font-medium md:text-xl">
          Não tem uma conta?{' '}
          <a
            className="rounded text-emerald-600 outline-none focus-within:ring-4 focus-within:ring-emerald-600 dark:text-emerald-400"
            href="#"
          >
            Cadastre-se
          </a>
        </span>
      </div>
    </section>
  )
}
