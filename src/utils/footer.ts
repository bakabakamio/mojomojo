import sanitizeHtml from 'sanitize-html'
import { themeConfig } from '~/.config'

let _parsedFooters: string[] | undefined

export function getParsedFooters() {
  if (!_parsedFooters || !import.meta.env.PROD) {
    const year = new Date().getFullYear()
    const { website, author, footer } = themeConfig.site

    const parseFooter = (str: string) => {
      str = str.replace(/%author/g, author)
      str = str.replace(/%website/g, website)
      str = str.replace(/%year/g, year.toString())

      return sanitizeHtml(str, {
        allowedTags: ['a', 'b', 'i', 'strong', 'em', 'span', 'br'],
        allowedAttributes: {
          a: ['href', 'target', 'rel'],
          span: ['class', 'style'],
        },
        transformTags: {
          a: (tagName, attribs) => {
            return {
              tagName,
              attribs: {
                ...attribs,
                ...(attribs.target === '_blank' ? { rel: 'noopener noreferrer' } : {}),
              },
            }
          },
        },
      })
    }
    _parsedFooters = footer.map(parseFooter)
  }
  return _parsedFooters
}
