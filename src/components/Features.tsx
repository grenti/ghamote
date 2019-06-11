import React, { FunctionComponent } from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'

interface IFeatureGridItemProps {
  text: string
  image: {} | string
}

interface IFeatureGridProps {
  gridItems: [IFeatureGridItemProps]
}

const FeatureGridItem: FunctionComponent<IFeatureGridItemProps> = item => (
  <div className="column is-6">
    <section className="section">
      <div className="has-text-centered">
        <div style={{ width: '240px', display: 'inline-block' }}>
          <PreviewCompatibleImage imageInfo={item} />
        </div>
      </div>
      <p>{item.text}</p>
    </section>
  </div>
)

const FeatureGrid: FunctionComponent<IFeatureGridProps> = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <FeatureGridItem key={item.text} {...item} />
    ))}
  </div>
)

export default FeatureGrid
