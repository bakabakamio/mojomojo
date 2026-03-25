import type { Post } from '~/types'
import { getCollection } from 'astro:content'
import dayjs from 'dayjs'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'

export async function getCategories() {
  const posts = await getPosts()
  const categories = new Map<string, Post[]>()

  for (const post of posts) {
    if (post.data.categories) {
      for (const c of post.data.categories) {
        const posts = categories.get(c) || []
        posts.push(post)
        categories.set(c, posts)
      }
    }
  }

  return categories
}

export async function getPosts(isArchivePage = false) {
  const posts = await getCollection('posts')

  // ⚡ Bolt: Optimize sorting by replacing dayjs() parsing with native Date.valueOf()
  // This avoids O(N log N) object allocations and significantly speeds up the sort comparison
  posts.sort((a, b) => {
    if (isArchivePage) {
      return a.data.pubDate.valueOf() < b.data.pubDate.valueOf() ? 1 : -1
    }

    const aDate = a.data.modDate ?? a.data.pubDate
    const bDate = b.data.modDate ?? b.data.pubDate

    return aDate.valueOf() < bDate.valueOf() ? 1 : -1
  })

  if (import.meta.env.PROD) {
    return posts.filter(post => post.data.draft !== true)
  }

  return posts
}

const parser = new MarkdownIt()
export function getPostDescription(post: Post) {
  if (post.data.description) {
    return post.data.description
  }

  const html = parser.render(post.body || '')
  const sanitized = sanitizeHtml(html, { allowedTags: [] })
  return sanitized.slice(0, 400)
}

export function formatDate(date: Date, format: string = 'YYYY-MM-DD') {
  return dayjs(date).format(format)
}

export function getPathFromCategory(
  category: string,
  category_map: { name: string, path: string }[],
) {
  const mappingPath = category_map.find(l => l.name === category)
  return mappingPath ? mappingPath.path : category
}
