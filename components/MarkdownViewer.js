import ReactMarkdown from 'react-markdown'

function MarkdownViewer({ children, rehypePlugins, className, address }) {
  const content = typeof children === 'string' ? children : ''

  const transformImageUri = (uri) => {
    if (!uri) {
      return
    }
    const urlParts = uri.split('/').filter((el) => el !== '.')

    if (!['https:', 'http:'].includes(urlParts[0])) {
      const githubUri = [
        ...['https://raw.githubusercontent.com', address, 'master'],
        ...urlParts,
      ].join('/')
      return githubUri
    }

    return uri
  }

  return (
    <ReactMarkdown
      rehypePlugins={rehypePlugins}
      className={className}
      transformImageUri={transformImageUri}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownViewer
