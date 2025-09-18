import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'd3bjqhp7',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-12-01',
  useCdn: true,
  // Disable client if no project ID is configured
  ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export function fileUrl(source: any) {
  if (!source?.asset?._ref) return ''
  
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'd3bjqhp7'
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  
  // Extract the file ID and extension from the _ref
  const ref = source.asset._ref
  const [, id, extension] = ref.match(/^file-(.+)-(.+)$/) || []
  
  if (!id || !extension) return ''
  
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`
}

// GROQ queries for fetching data
export const queries = {
  wedding: `*[_type == "wedding"][0]{
    _id,
    siteSettings{
      siteName,
      primaryColor,
      secondaryColor,
      backgroundColor,
      textColor,
      primaryFont,
      bodyFont,
      logo,
      customCSS
    },
    footer{
      coupleNames,
      nameColor,
      nameFont,
      thankYouMessage,
      messageColor,
      copyrightText,
      copyrightColor
    },
    hero{
      titleStyle,
      firstName,
      secondName,
      customTitle,
      titleFont,
      contentPosition{
        vertical,
        horizontal
      },
      subtitle,
      backgroundType,
      backgroundImage,
      backgroundVideo,
      videoFallbackImage,
      overlayOpacity,
      textColor,
      weddingDate,
      showCountdown,
      showScrollIndicator,
      scrollIndicatorStyle
    },
    ceremonies{
      haldi{
        enabled,
        title,
        date,
        venue,
        address,
        mapEmbed,
        description
      },
      cocktailDinner{
        enabled,
        title,
        date,
        venue,
        address,
        mapEmbed,
        description
      },
      wedding{
        enabled,
        title,
        date,
        venue,
        address,
        mediaType,
        image,
        video,
        mapEmbed,
        description
      },
      reception{
        enabled,
        title,
        date,
        venue,
        address,
        mapEmbed,
        description
      }
    },
    venue{
      name,
      address,
      date,
      time,
      mapEmbed,
      description
    },
    gallery{
      images[]
    },
    rsvp{
      title,
      titleFont,
      titleColor,
      description,
      descriptionFont,
      descriptionColor,
      backgroundColor,
      formType,
      googleFormId,
      formEmbed,
      typeformId,
      deadline,
      contactInfo{
        email,
        phone
      }
    },
    receptionRSVP{
      title,
      titleFont,
      titleColor,
      description,
      descriptionFont,
      descriptionColor,
      backgroundColor,
      formType,
      googleFormId,
      formEmbed,
      typeformId,
      deadline,
      contactInfo{
        email,
        phone
      }
    },
    story{
      title,
      content,
      images[]
    }
  }`
}
