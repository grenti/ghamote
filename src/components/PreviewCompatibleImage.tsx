import Img from 'gatsby-image'
import React, { FunctionComponent } from 'react'
import { IIndexPageImage } from '../templates/index-page'
import {
  Blurb,
  GatsbyImage,
  GatsbyImageWithAlt,
  hasImageObject,
  hasNestedImageObject,
  IGatsbyChildImage,
  IGatsbyImage,
  isGatsbyChildImage,
} from '../types/images'

interface IPreviewCompatibleImageProps {
  imageInfo: GatsbyImageWithAlt
  style?: {}
}

const PreviewCompatibleImage: FunctionComponent<
  IPreviewCompatibleImageProps
> = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '' } = imageInfo

  if (hasNestedImageObject(imageInfo)) {
    return (
      <Img
        style={imageStyle}
        fluid={imageInfo.image.childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (hasImageObject(imageInfo)) {
    return (
      <Img
        style={imageStyle}
        fluid={imageInfo.childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (!!imageInfo && typeof imageInfo === 'string') {
    return <img style={imageStyle} src={imageInfo} alt={alt} />
  }

  return null
}

export default PreviewCompatibleImage
