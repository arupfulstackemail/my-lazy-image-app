import { useEffect, useRef, useState } from "react";

const useLazyLoadImage = (src, options = {}) => {
  const [loadedSrc, setLoadedSrc] = useState(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const node = imgRef.current;

    // if (!node) return;

    let observer;

    if ("IntersectionObserver" in window) {
      console.log("1")
      observer = new IntersectionObserver(
        ([entry]) => {
          console.log("1.1", src)
          if (entry.isIntersecting) {
            console.log("1.2")
            console.log("✅ In viewport");
            setLoadedSrc(src);
            observer.unobserve(node);
          }else {
            console.log("✅ Not In viewport");
          }
        },
        {
          threshold: 0.1,
          ...options,
        }
      );
      console.log({observer})
      observer.observe(node);
    } else {

      console.log("2", src)
      // Fallback for unsupported browsers
      setLoadedSrc(src);
    }
    // console.log("2")
    return () => {
      if (observer && node) {
        observer.unobserve(node);
      }
    };
  }, [src, options]);
  console.log({loadedSrc})
  return [imgRef, loadedSrc];
};

export default useLazyLoadImage;
