import React, { FunctionComponent } from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'

interface IBlogPostPreviewProps {
  entry: {
    getIn: ([]) => string
  }
  widgetFor: (x: string) => {}
}

const BlogPostPreview: FunctionComponent<IBlogPostPreviewProps> = ({
  entry,
  widgetFor,
}) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default BlogPostPreview
