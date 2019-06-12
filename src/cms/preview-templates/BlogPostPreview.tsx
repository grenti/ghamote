import React, { FunctionComponent } from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

interface IBlogPostPreviewProps {
  entry: {
    getIn: ([]) => string
  }
  widgetFor: (x: string) => string
}

const BlogPostPreview: FunctionComponent<IBlogPostPreviewProps> = ({
  entry,
  widgetFor,
}) => {
  const tags = [entry.getIn(['data', 'tags'])]
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags}
      title={entry.getIn(['data', 'title'])}
    />
  )
}

export default BlogPostPreview
