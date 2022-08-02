export const components = [
  {
    nameWithOwner: 'texttree/timeline-poc',
    name: 'timeline-poc',
    description:
      ' blanditiis nobis temporibus quam ipsum quis exercitationem fugiat asperiores? Necessitatibus maiores nesciunt quis eligendi.',
    repositoryTopics: { nodes: [{ topic: { name: 'component' } }] },
    owner: {
      login: 'timeline-poc',
      avatarUrl: 'https://avatars.githubusercontent.com/u/77689766?v=4',
    },
  },
  {
    nameWithOwner: 'unfoldingword/scripture-resources-rcl',
    name: 'scripture-resources-rcl',
    description: ' Omnis tempore alias, iste repellendus deleniti rerum dolores',
    repositoryTopics: {
      nodes: [
        { topic: { name: 'vanila' } },
        { topic: { name: 'javascript' } },
        { topic: { name: 'react' } },
      ],
    },
    owner: {
      login: 'timeline-poc',
      avatarUrl: 'https://avatars.githubusercontent.com/u/77689711?v=4',
    },
  },
  {
    nameWithOwner: 'unfoldingword/bible-reference-rcl',
    name: 'bible-reference-rcl',
    description: 'Amet consectetur adipisicing elit Lorem ipsum dolor sit',
    repositoryTopics: {
      nodes: [{ topic: { name: 'reference' } }, { topic: { name: 'book' } }],
    },
    owner: {
      login: 'timeline-poc',
      avatarUrl: 'https://avatars.githubusercontent.com/u/77689722?v=4',
    },
  },
  {
    nameWithOwner: 'texttree/gitea-react-toolkit',
    name: 'gitea-react-toolkit',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    repositoryTopics: {
      nodes: [{ topic: { name: 'dataset' } }, { topic: { name: 'nlp' } }],
    },
    owner: {
      login: 'timeline-poc',
      avatarUrl: 'https://avatars.githubusercontent.com/u/77689722?v=4',
    },
  },
]

export const apps = [
  {
    nameWithOwner: 'texttree/bsa',
    name: 'OBT',
    description: 'Bible Study App',
    repositoryTopics: { nodes: [{ topic: { name: 'bible' } }] },
    owner: {
      login: 'texttree-bsa',
      avatarUrl: 'https://avatars.githubusercontent.com/u/77689766?v=4',
    },
  },
  {
    nameWithOwner: 'texttree/scripture-resources-rcl',
    name: 'V-cana',
    description:
      'A tool to translate the Bible and Bible content into your language in the easiest, most accessible and fastest way',
    repositoryTopics: {
      nodes: [{ topic: { name: 'nextjs' } }, { topic: { name: 'javascript' } }],
    },
    owner: {
      login: 'timeline-poc2',
      avatarUrl: 'https://avatars.githubusercontent.com/u/77689711?v=4',
    },
  },
  {
    nameWithOwner: 'texttree/gitea-react-toolkit',
    name: 'Autographa',
    description: 'A Bible Translator for Everyone',
    repositoryTopics: {
      nodes: [{ topic: { name: 'translate' } }, { topic: { name: 'bible' } }],
    },
    owner: {
      login: 'timeline-poc3',
      avatarUrl: 'https://avatars.githubusercontent.com/u/11397506?v=4',
    },
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
