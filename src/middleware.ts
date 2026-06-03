import { defineMiddleware } from 'astro:middleware'
import { themeConfig } from '~/.config'
import { LANGUAGES } from '~/i18n.ts'

// ⚡ Bolt: Hoist static dependencies outside the middleware to prevent repeated closures/allocations and excessive garbage collection overhead. `onRequest` executes per-render for every statically generated page during build time.
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
