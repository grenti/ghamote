import Img, { FluidObject } from 'gatsby-image'
import React, { FunctionComponent } from 'react'

interface IPreviewCompatibleImageProps {
  imageInfo: {
    alt?: string
    childImageSharp?: {
      fluid: FluidObject
    }
    image: {
      childImageSharp?: {
        fluid: FluidObject
      }
    }
  }
  style?: {}
}

const PreviewCompatibleImage: FunctionComponent<
  IPreviewCompatibleImageProps
> = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string') {
    return <img style={imageStyle} src={image} alt={alt} />
  }

  return null
}

export default PreviewCompatibleImage
