import useLazyLoadImage from "../hooks/useLazyLoadImage";

const LazyImage = ({ src, alt, ...props }) => {
    // console.log({src, alt, props})
    const [imgRef, loadedSrc] = useLazyLoadImage(src);
    // console.log({imgRef, loadedSrc})
  
    return (
      <img
        ref={imgRef}
        src={loadedSrc ?? undefined}
        alt={alt}
        loading="lazy"
        style={{
          width: "100%",
          height: "auto",
          opacity: loadedSrc ? 1 : 0.5,
          transition: "opacity 0.3s ease-in-out",
        }}
        {...props}
      />
    );
  };
  
  export default LazyImage;
