import React, { FunctionComponent } from 'react'
import { Blurb } from '../types/images'
import PreviewCompatibleImage from './PreviewCompatibleImage'

type IFeatureGridItemProps = Blurb

interface IFeatureGridProps {
  gridItems: IFeatureGridItemProps[]
}

const FeatureGridItem: FunctionComponent<IFeatureGridItemProps> = item => (
  <div className="column is-6">
    <section className="section">
      <div className="has-text-centered">
        <div style={{ width: '240px', display: 'inline-block' }}>
          <PreviewCompatibleImage imageInfo={item.image} />
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
