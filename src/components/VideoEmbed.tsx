export const VideoEmbed = ({ src }) => (
  <div
    style={{
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <iframe
      style={{ width: "100%", height: "315px" }}
      src={src}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
);
