export default async (req, res) => {
  const id = new URL(req.url, `http://${req.headers.host}`).searchParams.get('id')
  const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  const content = await fetch(url)
  const json = await content.json()
  res.status(200).json({ text: json.by })
}
