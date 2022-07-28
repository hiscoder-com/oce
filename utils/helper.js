export const apps = [
  {
    html_url: 'https://github.com/texttree/bsa',
    name: 'Open Bible Text',
    description: 'Bible Study App',
    avatar_url: 'https://avatars.githubusercontent.com/u/77689766?v=4',
  },
  {
    html_url: 'https://github.com/texttree/v-cana',
    name: 'V-cana',
    description:
      'A tool to translate the Bible and Bible content into your language in the easiest, most accessible and fastest way',
    avatar_url: 'https://avatars.githubusercontent.com/u/77689766?v=4',
  },
  {
    html_url: 'https://github.com/unfoldingWord-dev/Autographa',
    name: 'Autographa',
    description: 'A Bible Translator for Everyone',
    avatar_url: 'https://avatars.githubusercontent.com/u/11397506?v=4',
  },
]

export const timeSince = (dateString) => {
  const seconds = Math.floor((new Date() - new Date(dateString)) / 1000)
  let interval = Math.floor(seconds / 31536000)
  if (interval > 1) {
    return interval + ' years'
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + ' months'
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + ' days'
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return interval + ' hours'
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return interval + ' minutes'
  }
  return Math.floor(seconds) + ' seconds'
}
