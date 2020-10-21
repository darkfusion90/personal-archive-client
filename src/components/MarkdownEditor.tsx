import React from 'react'
import ReactMarkdownEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

import Markdown from './Markdown'

type ReactMarkdownEditorProps = React.ComponentProps<typeof ReactMarkdownEditor>

type ICustomMarkdownEditorProps = Omit<ReactMarkdownEditorProps, 'renderHTML'> & {
    onChangeGetData?: ValueCallback<string>
}

type MarkdownEditorData = {
    text: string
    html: string
}

const MarkdownEditor: React.FC<ICustomMarkdownEditorProps> = ({
    onChange,
    onChangeGetData,
    ...props
}) => {
    const renderHTML = (value: string) => {
        return <Markdown>{value}</Markdown>
    }

    const handleChange = (data: MarkdownEditorData, e?: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChangeGetData && onChangeGetData(data.text)
        onChange && onChange(data, e)
    }

    return (
        <ReactMarkdownEditor
            {...props}
            renderHTML={renderHTML}
            onChange={handleChange}
        />
    )
}

export default MarkdownEditor
