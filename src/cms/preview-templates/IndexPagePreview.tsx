import React, { FunctionComponent } from 'react'
import { IndexPageTemplate } from '../../templates/index-page'

interface IIndexPagePreviewProps {
  entry: {
    getIn: ([]) =>
      | string
      | {
          image: string
          title: string
          heading: string
          subheading: string
          description: string
          intro: { blurbs: [] }
          mainpitch: {}
        }
  }
  getAsset?: () => string
}

const IndexPagePreview: FunctionComponent<IIndexPagePreviewProps> = ({
  entry,
  getAsset,
}) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
