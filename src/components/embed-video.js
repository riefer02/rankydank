import React from "react"

export default function EmbedVideo({ video }) {
  const { label, videoId, short } = video

  const url = "https://www.youtube.com/embed/"

  return (
    <div className="embed">
      <div className="embed__container">
        <iframe
          title={`Music video: ${label}`}
          className="embed__video"
          frameBorder="0"
          src={`${url}${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
