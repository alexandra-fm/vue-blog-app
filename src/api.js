const API_BASE = "https://jsonplaceholder.typicode.com"

async function fetchResource(url) {
  const res = await fetch(`${API_BASE}${url}`)

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, receved ${res.status}`)
  }

  return await res.json()
}

async function fetchAllPosts() {
  const posts = await fetchResource(`/posts?_limit=3`)

  return posts
}

export { fetchAllPosts }
