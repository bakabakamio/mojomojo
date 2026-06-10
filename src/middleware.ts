import { defineMiddleware } from 'astro:middleware'
import { themeConfig } from '~/.config'
import { LANGUAGES } from '~/i18n.ts'

// ⚡ Bolt: Hoist static configuration and dictionary parsing outside the middleware.
// In Astro, `onRequest` runs per-render for every statically generated page.
// Hoisting these variables prevents repeated closures and dictionary allocations,
// reducing garbage collection overhead and speeding up the build process.
const locale = themeConfig.appearance.locale
const localeTranslate = LANGUAGES[locale]

function validateKey(key: string): key is keyof typeof localeTranslate {
  return key in localeTranslate
}

export const onRequest = defineMiddleware(async (context, next) => {
  context.locals.translate = (key, param) => {
    if (!validateKey(key))
      return key
    if (!param)
      return localeTranslate[key]
    return localeTranslate[key].replace('%d', param.toString())
  }
  return next()
})
