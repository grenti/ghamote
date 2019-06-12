import { FluidObject } from 'gatsby-image'

export interface IGatsbyChildImage {
  childImageSharp: {
    fluid: FluidObject
  }
}

export type GatsbyImage = IGatsbyChildImage | string

export interface IGatsbyImage {
  image: GatsbyImage
}

export type GatsbyImageWithAlt = {
  alt?: string
} & (IGatsbyChildImage | IGatsbyImage | string)

export type Blurb = IGatsbyImage & { text: string }

export const isGatsbyChildImage = (
  image: GatsbyImage,
): image is IGatsbyChildImage =>
  (image as IGatsbyChildImage).childImageSharp !== undefined

export const hasNestedImageObject = (
  imageInfo: GatsbyImageWithAlt,
): imageInfo is { alt?: string } & { image: IGatsbyChildImage } =>
  (imageInfo as { alt?: string } & { image: IGatsbyChildImage }).image !==
    undefined &&
  (imageInfo as { alt?: string } & { image: IGatsbyChildImage }).image
    .childImageSharp !== undefined

// TODO: Make this method generic since it's the same as isGatsbyChildImage
export const hasImageObject = (
  imageInfo: GatsbyImageWithAlt,
): imageInfo is IGatsbyChildImage =>
  (imageInfo as IGatsbyChildImage).childImageSharp !== undefined
