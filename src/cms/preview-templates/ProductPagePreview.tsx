import React, { FunctionComponent } from 'react'
import { ProductPageTemplate } from '../../templates/product-page'
import { IPlan, ITestimonial } from '../../types/entities'
import { Blurb, IGatsbyChildImage } from '../../types/images'

interface IEntryConevrter {
  toJS<T,>(): T[]
}

type Entry = string & IEntryConevrter

interface IProductPagePreviewProps {
  entry: {
    getIn: ([]) => Entry
  }
  getAsset: (x: string) => IGatsbyChildImage
}

const ProductPagePreview: FunctionComponent<IProductPagePreviewProps> = ({
  entry,
  getAsset,
}) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS<Blurb>() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials
    ? entryTestimonials.toJS<ITestimonial>()
    : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS<IPlan>() : []

  return (
    <ProductPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{
        blurbs,
        description: entry.getIn(['data', 'intro', 'description']),
        heading: entry.getIn(['data', 'intro', 'heading']),
      }}
      main={{
        description: entry.getIn(['data', 'main', 'description']),
        heading: entry.getIn(['data', 'main', 'heading']),
        image1: {
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
        },
        image2: {
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
        },
        image3: {
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
        },
      }}
      fullImage={entry.getIn(['data', 'full_image'])}
      testimonials={testimonials}
      pricing={{
        description: entry.getIn(['data', 'pricing', 'description']),
        heading: entry.getIn(['data', 'pricing', 'heading']),
        plans: pricingPlans,
      }}
    />
  )
}

export default ProductPagePreview
