import React, { FunctionComponent } from 'react'

interface IHTMLContentProps {
  className?: string
  content: string
}

export const HTMLContent: FunctionComponent<IHTMLContentProps> = ({
  content,
  className,
}) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content: FunctionComponent<IHTMLContentProps> = ({
  content,
  className,
}) => <div className={className}>{content}</div>

export default Content
