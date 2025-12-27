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
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
);
