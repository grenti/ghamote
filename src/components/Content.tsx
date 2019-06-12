import React, { FunctionComponent, ReactNode } from 'react'

export interface IHTMLContentProps {
  className?: string
  content: string
}

export const HTMLContent: FunctionComponent<IHTMLContentProps> = ({
  content,
  className,
}) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export interface IContentProps {
  className?: string
  content: ReactNode | string
}

const Content: FunctionComponent<IContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content
