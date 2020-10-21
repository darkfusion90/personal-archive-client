import React from 'react'
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown'
import additionalMarkdownSupport from 'remark-gfm'

type IMarkdownProps = ReactMarkdownProps

const Markdown: React.FC<IMarkdownProps> = (props) => {
    return (
        <ReactMarkdown
            plugins={[additionalMarkdownSupport]}
            {...props}
        />
    )
}

export default Markdown
