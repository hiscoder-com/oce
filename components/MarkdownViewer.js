import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import 'highlight.js/styles/github.css'

import 'github-markdown-css/github-markdown-light.css'

function MarkdownViewer({ children, className, address }) {
  const content = typeof children === 'string' ? children : ''

  const transformImageUri = (uri) => {
    if (!uri) {
      return
    }

    const urlParts = uri.split('/').filter((el) => el !== '.')

    if (urlParts.length > 0 && !['https:', 'http:'].includes(urlParts[0])) {
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
      rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeSlug]}
      className={className}
      remarkPlugins={[remarkGfm]}
      transformImageUri={transformImageUri}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownViewer
