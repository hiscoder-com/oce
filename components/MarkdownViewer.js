import ReactMarkdown from 'react-markdown'

function MarkdownViewer({ children, owner, repo, rehypePlugins, className }) {
  // const { server, owner, languageId, projectId } = config
  const content = typeof children === 'string' ? children : ''

  const transformLinkUri = (uri) => {
    return changeUri({
      uri,
      repo,
      owner,
    })
  }

  const changeUri = ({ uri }) => {
    if (!uri) {
      return uri
    }
    const checkForImages = ['png', 'jpeg', 'jpg', 'svg'].filter((el) => {
      uri.indexOf(el) < 0
    })
    if (checkForImages.length > 3) {
      return uri
    }
  }
  //   const link = uri.replace('rc://*', languageId).replace('rc://', '')
  //   const tw = ['/other/', '/kt/', '/names/']
  //   let url = ''
  //   const reference = _link.split('/')
  //   if (tw.find((item) => _link.includes(item)) && reference) {
  //     const resourceId = 'tw'
  //     let filePath = ''
  //     switch (reference.length) {
  //       case 3:
  //         filePath = `${reference[1]}/${reference[2]}`
  //         url = `#page=${server}/${owner}/${languageId}_${resourceId}/raw/branch/master/bible/${filePath}`
  //         break
  //       case 6:
  //         filePath = `${reference[4]}/${reference[5]}`
  //         url = `#page=${server}/${owner}/${languageId}_${resourceId}/raw/branch/master/bible/${filePath}.md`
  //         break
  //       default:
  //         break
  //     }
  //     return url
  //   }

  // }

  return (
    <ReactMarkdown
      rehypePlugins={rehypePlugins}
      className={className}
      transformLinkUri={transformLinkUri}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownViewer
