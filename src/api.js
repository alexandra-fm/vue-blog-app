import dateFilter from "./filters/date.filter"
const API_BASE = "https://jsonplaceholder.typicode.com"

async function fetchResource(url) {
  const res = await fetch(`${API_BASE}${url}`)

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, receved ${res.status}`)
  }

  return await res.json()
}

async function fetchAllPosts(quantity) {
  const posts = await fetchResource(`/posts?_limit=${quantity}`)

  return posts.map(post => _transformPost(post))
}

let _setDate = () => {
  const month = Math.floor(1 + Math.random() * 12)
  const day = Math.floor(1 + Math.random() * 28)
  const year = 2021
  const date = `${month} ${day} ${year}`

  const hour = Math.floor(10 + Math.random() * (24 + 1 - 10))
  const minute = Math.floor(10 + Math.random() * (59 + 1 - 10))

  const dateFormat = dateFilter(date)

  const fullDate = `${dateFormat}, ${hour}:${minute}`

  return fullDate
}

let _transformPost = post => {
  return {
    userId: post.userId,
    id: post.id,
    title: post.title.slice(0, 50),
    body: post.body,
    description: post.body.slice(0, 100),
    comments: [],
    date: _setDate(),
  }
}
export { fetchAllPosts }
