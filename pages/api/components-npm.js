import axios from 'axios'

export default async function handler(req, res) {
  const { from = false, limit = 10, 'topics[]': _topics = [] } = req.query
  const topics = Array.isArray(_topics) ? _topics : _topics.length ? [_topics] : []
  topics.push('bible')
  try {
    const result = await axios.get(
      `https://registry.npmjs.com/-/v1/search?text=keywords:${topics.join(
        '+'
      )}&size=${parseInt(limit)}&from=${from || 0}`
    )
    res.status(200).json(result.data)
  } catch (error) {
    res.status(404).json(error)
  }
}
