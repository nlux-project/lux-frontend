import {UnitCode, unitCodeFromNumString} from '../../../config/cms'

export interface ILandingPageImage {
  type: string

  attributes: {title: string
  field_chit_unit: string[]  // unit code (number string, e.g. "2")
    field_iiif_image: {
      uri: string // URL of hero image
    }
    field_url_path: string // URL of LUX record for the image
  }
}

export interface IImageData {
  url: string
  altText: string
  caption: string
  recordUrl: string
}

export class LandingPageImageParser {
  items: ILandingPageImage[]

  constructor(items: ILandingPageImage[]) {
    this.items = items ?? []
  }

  getHeroImage(unit: UnitCode): IImageData|null {
    const items = Array.isArray(this.items) ?
        this.items :
        [] if (items.length === 0) return null

    let images = items.filter((item) => {
      try {
        return unitCodeFromNumString(item.attributes.field_chit_unit[0]) ===
            unit
      } catch (e) {
        return false
      }
    })

    // In case there's no images available for the requested unit,
    // just pick any.
    if (images.length === 0) {
      images = this.items
    }

    const numImages = images.length
    const randomIndex = Math.floor(Math.random() * numImages)
    const image = images[randomIndex] const attr = image.attributes

    return {
      url: attr.field_iiif_image.uri, altText: attr.title, caption: attr.title,
          recordUrl: attr.field_url_path,
    }
  }
}
