import axios from 'axios'

export default async function handler(req, res) {
  const {
    body: {
      commits,
      repository: {
        description,
        full_name,
        owner,
        topics,
        homepage,
        language,
        name,
        master_branch,
      },
    },
  } = req

  const isChange = (file) => {
    return commits.some((el) => {
      return el.added.includes(file) || el.modified.includes(file)
    })
  }
  let data = {
    repository: { description, full_name, owner: owner.name, topics, homepage, language },
  }

  if (!commits || !commits?.length > 0) {
    return res.status(200).json(data)
  }
  if (isChange('oce.json')) {
    try {
      const result = await axios.get(
        `https://raw.githubusercontent.com/${owner.name}/${name}/${master_branch}/oce.json`
      )

      data['oce'] = result.data
    } catch (error) {
      console.log(error)
    }
  }
  if (isChange('README.md')) {
    try {
      const result = await axios.get(
        `https://raw.githubusercontent.com/${owner.name}/${name}/${master_branch}/README.md`
      )

      data['readme'] = result.data
    } catch (error) {
      console.log(error)
    }
  }

  res.status(200).json(data)
}
