import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import React, { FunctionComponent, ReactElement } from 'react'
import Helmet from 'react-helmet'
import Content, {
  HTMLContent,
  IContentProps,
  IHTMLContentProps,
} from '../components/Content'
import Layout from '../components/Layout'

interface IBlogPostTemplate {
  content: string | ReactElement
  contentComponent?:
    | FunctionComponent<IHTMLContentProps>
    | FunctionComponent<IContentProps>
  description: string
  helmet?: {}
  tags?: string[]
  title: string
}

export const BlogPostTemplate: FunctionComponent<IBlogPostTemplate> = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

interface IBlogPostProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: Omit<
        IBlogPostTemplate,
        'content' | 'contentComponent' | 'helmet'
      >
    }
  }
}

const BlogPost: FunctionComponent<IBlogPostProps> = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
