import axios from 'axios'

export default async function handler(req, res) {
  const {
    body: {
      ref,
      commits,
      repository: { description, full_name, topics, homepage, language, master_branch },
    },
  } = req

  const isChange = (file) => {
    return commits.some((el) => {
      return (
        el.added.includes(file) || el.modified.includes(file) || el.removed.includes(file)
      )
    })
  }
  let data = {
    repository: { description, full_name, topics, homepage, language },
  }

  if (!commits || !commits?.length > 0) {
    return res.status(200).json(data)
  }
  if (master_branch !== ref.split('/')[2]) {
    return res.status(200).json(data)
  }
  if (isChange('oce.json')) {
    try {
      const result = await axios.get(
        `https://raw.githubusercontent.com/${full_name}/${master_branch}/oce.json`
      )

      data['oce'] = result.data
    } catch (error) {
      // data['oce'] = {}
      res.status(404).json(error)
      return
    }
  }

  res.status(200).json(data)
}
