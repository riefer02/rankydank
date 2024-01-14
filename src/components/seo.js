import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

function Seo({ description, lang, meta, title }) {
  const { site, ogImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            logo
          }
        }
        ogImage: file(
          relativePath: { eq: "rankydank-colored-horizontal.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, pngOptions: { quality: 100 })
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaImage = getImage(ogImage)

  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Rankydank (Rankin Fetzer)",
    "@id": "https://rankydank.com",
    description: metaDescription,
    url: "https://rankydank.com",
    image: {
      "@type": "ImageObject",
      url: metaImage.images.fallback.src,
      height: metaImage.height,
      width: metaImage.width,
    },
    logo: {
      "@type": "ImageObject",
      url: "https://rankydank.com/rankydank-bg.jpg",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=100063594009105",
      "https://www.instagram.com/rankydank/",
      "https://www.youtube.com/@Rankydank",
      "https://www.tiktok.com/@rankinfetzer",
      "https://open.spotify.com/artist/1vU5u1iI6tUaN81oPkJY6v",
    ],
    genre: ["Funk", "Dance", "Rock", "Pop"],
    location: {
      "@type": "Place",
      name: "Austin, TX",
    },
    potentialAction: {
      "@type": "ListenAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://open.spotify.com/artist/1vU5u1iI6tUaN81oPkJY6v",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform",
        ],
        httpMethod: "GET",
        contentType: "text/html",
      },
    },
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: metaImage.images.fallback.src,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
