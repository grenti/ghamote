import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'

interface IAboutPagePreviewProps {
  entry: {
    getIn: ([]) => string
  }
  widgetFor: (x: string) => string
}

export default function AboutPagePreview({
  entry,
  widgetFor,
}: IAboutPagePreviewProps) {
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  )
}
