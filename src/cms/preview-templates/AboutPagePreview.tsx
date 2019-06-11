import React, { FunctionComponent } from 'react'
import { AboutPageTemplate } from '../../templates/about-page'

interface IAboutPagePreviewProps {
  entry: {
    getIn: ([]) => string,
  }
  widgetFor: (x: string) => string,
}

const AboutPagePreview = ({ entry, widgetFor }): FunctionComponent<IAboutPagePreviewProps> => {
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  )
}

// AboutPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   widgetFor: PropTypes.func,
// }

export default AboutPagePreview
