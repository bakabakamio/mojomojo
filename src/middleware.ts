import { defineMiddleware } from 'astro:middleware'
import { themeConfig } from '~/.config'
import { LANGUAGES } from '~/i18n.ts'

const locale = themeConfig.appearance.locale
const localeTranslate = LANGUAGES[locale]

// ⚡ Bolt: Cache locale translation structures outside the middleware.
// In Astro, `onRequest` executes per-render for every statically generated page.
// Hoisting these variables and the `translate` function prevents unnecessary
// allocations and closures on every page build, reducing memory overhead and GC pressure.
function validateKey(key: string): key is keyof typeof localeTranslate {
  return key in localeTranslate
}

function translate(key: string, param?: string | number) {
  if (!validateKey(key))
    return key
  if (!param)
    return localeTranslate[key]
  return localeTranslate[key].replace('%d', param.toString())
}

export const onRequest = defineMiddleware((context, next) => {
  context.locals.translate = translate
  return next()
})
