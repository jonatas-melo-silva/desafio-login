import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'
import IconGoogle from '../assets/icon.png'

const base =
  'flex w-full items-center justify-center px-6 py-12' as ClassNameValue

export type LoginProps = ComponentProps<'section'>

export function Login({ className, ...props }: LoginProps) {
  return (
    <section className={twMerge(base, className)} {...props}>
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-16">
        <div className="flex w-full flex-col items-start justify-center gap-10">
          <div className="flex w-full flex-col justify-start gap-2">
            <span className="text-base font-medium">Bem-vindo de volta</span>
            <h1 className="text-2xl font-semibold">Faça login na sua conta</h1>
          </div>

          <form
            className="flex w-full flex-col items-start justify-center gap-14"
            action=""
          >
            <fieldset className="flex w-full flex-col gap-6">
              <div className="flex w-full flex-col gap-8">
                <div className="flex w-full flex-col gap-3">
                  <label className="text-sm font-normal" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="flex w-full items-center gap-2 truncate rounded border border-gray-200 bg-slate-50 p-4 text-base font-normal outline-none placeholder:text-neutral-500"
                    placeholder="exemplo@gmail.com"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="flex w-full flex-col gap-3">
                  <label className="text-sm font-normal" htmlFor="password">
                    Senha
                  </label>
                  <input
                    className="flex w-full items-center gap-2 truncate rounded border border-gray-200 bg-slate-50 p-4 text-base font-normal outline-none placeholder:text-neutral-500"
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
                    className="bg-slate-50"
                    type="radio"
                    name="lembre-de-mim"
                    id="lembre-de-mim"
                  />
                  <label
                    className="text-sm font-medium"
                    htmlFor="lembre-de-mim"
                  >
                    Lembre de mim
                  </label>
                </div>
                <a className="text-sm font-medium text-emerald-600" href="#">
                  Esqueceu a senha?
                </a>
              </div>
            </fieldset>

            <div className="flex w-full flex-col items-center justify-center gap-6">
              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-3 rounded bg-emerald-600 px-3.5 py-3.5 text-base font-semibold text-white"
              >
                Entrar na conta
              </button>
              <button
                type="button"
                className="flex h-11 w-full items-center justify-center gap-3 rounded bg-gray-900 px-3.5 py-3.5 text-base font-semibold text-white"
              >
                <img className="h-4 w-4" src={IconGoogle} alt="Google" />
                {''}
                Ou faça login com o Google
              </button>
            </div>
          </form>
        </div>

        <span className="text-center text-base font-medium">
          Não tem uma conta?{' '}
          <a className="text-emerald-600" href="#">
            Cadastre-se
          </a>
        </span>
      </div>
    </section>
  )
}
