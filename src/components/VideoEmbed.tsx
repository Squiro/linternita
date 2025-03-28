export const VideoEmbed = ({ src }) => (
  <div
    style={{
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
);
