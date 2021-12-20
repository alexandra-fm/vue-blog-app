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

const _setDate = () => {
  const month = Math.floor(1 + Math.random() * 12)
  const day = Math.floor(1 + Math.random() * 28)
  const year = 2021
  const date = `${month} ${day} ${year} `

  const hour = Math.floor(10 + Math.random() * (23 + 1 - 10))
  const minute = Math.floor(10 + Math.random() * (59 + 1 - 10))

  const dateFormat = dateFilter(date)

  const fullDate = `${dateFormat}, ${hour}:${minute}`

  return fullDate
}

const _deleteSpaces = string => {
  return string.replace(/\r?\n/g, "")
}

const _sliceString = (string, max) => {
  return string.slice(0, max)
}

const _getRandomNumber = () => {
  const random = Math.floor(1 + Math.random() * 1000)
  return random
}

const _transformPost = post => {
  return {
    userId: post.userId,
    id: post.id,
    title: _sliceString(_deleteSpaces(post.title), 50),
    body: _deleteSpaces(post.body),
    description: _sliceString(_deleteSpaces(post.body), 100),
    comments: [
      {
        id: _getRandomNumber(),
        date: _setDate(),
        userName: "Хомяк",
        body: _deleteSpaces(post.body),
      },
      {
        id: _getRandomNumber(),
        date: _setDate(),
        userName: "Плотва",
        body: _deleteSpaces(post.body),
      },
    ],
    date: _setDate(),
  }
}
export { fetchAllPosts }
