import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string | null | undefined) => {
  if (!url) return noImage;

  const target = "media/";
  const targetIndex = url.indexOf(target);
  if (targetIndex === -1) return url;

  const index = targetIndex + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
