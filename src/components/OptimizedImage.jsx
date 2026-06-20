/* eslint-disable react/prop-types */
import { useState } from "react";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  loading = "lazy",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`image-shell ${className}`}
      style={width && height ? { aspectRatio: `${width} / ${height}` } : null}
    >
      {!isLoaded && <div className="image-placeholder" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={`optimized-image ${isLoaded ? "is-loaded" : ""} ${imgClassName}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;
