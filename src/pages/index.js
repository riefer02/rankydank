import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import EmbedVideo from "../components/embed-video"
// import SpotifyPlayer from "../components/spotify-player"
import ContentRow from "../components/content-row"

import "../assets/scss/index.scss"
import { biography } from "../lib/biography"
import { youtubeVideos } from "../lib/videos"
// import { playlists } from "../lib/playlists"
import { socialMedia } from "../lib/social-media"

const IndexPage = ({ data }) => {
  const rankydankImage = getImage(data.rankydankImage)
  const logo = getImage(data.rankydankLogo)

  return (
    <Layout>
      <Seo title="Rankydank | Musician & Youtuber | Austin, Texas" />
      <ContentRow animation="slide-up">
        <div className="w-full flex flex-col justify-center items-center gap-12 p-4 pt-12 md:pt-0">
          <GatsbyImage
            image={logo}
            placeholder="blurred"
            alt="Rankin Rankydank Fetzer Logo"
            className="mx-auto max-w-xl"
          />

          <GatsbyImage
            image={rankydankImage}
            placeholder="blurred"
            alt="Rankin Rankydank Fetzer"
            className="mx-auto"
          />
        </div>
      </ContentRow>
      <header className="page-marquee__container max-w-3xl mx-auto">
        <h1>Rankydank | Musician & Youtuber | Austin, Texas</h1>
        <h2>"Funky, Dance, Intimate, Energetic Live Performances"</h2>
      </header>
      <main className="page-content">
        <ContentRow animation="fade">
          <div className="about-section font-bold max-w-3xl mx-auto">
            {biography.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ContentRow>
        {/* <ContentRow animation="slide-up">
          <div className="spotify-playlists">
            {playlists.map(playlist => (
              <SpotifyPlayer key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </ContentRow> */}
        {youtubeVideos.map((video, index) => (
          <ContentRow key={index} animation="fade">
            <div className="max-w-3xl mx-auto">
              <EmbedVideo video={video} />
            </div>
          </ContentRow>
        ))}
        <ContentRow animation="slide-up">
          <div className="button-list">
            <h1>Social Media</h1>
            <ul>
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <a className="button" href={social.url}>
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ContentRow>
      </main>
      <ContentRow animation="slide-up">
        <footer className="mx-auto w-full text-center mb-10 secondary-font-family">
          &#169; {new Date().getFullYear()} Rankydank
        </footer>
      </ContentRow>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    rankydankImage: file(
      relativePath: { eq: "rankydank-square-coloured.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          webpOptions: { quality: 80 }
          width: 400
        )
      }
    }
    rankydankLogo: file(relativePath: { eq: "Rankin-logo.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, webpOptions: { quality: 100 })
      }
    }
  }
`
