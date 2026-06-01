const BACKEND_ORIGIN = "https://agcc26-backend.onrender.com";
const IMAGE_CACHE_VERSION = Math.floor(Date.now() / 60000);

export function getImageUrl(path) {
  if (!path) return "";

  const url =
    path.startsWith("http://") || path.startsWith("https://")
      ? path
      : `${BACKEND_ORIGIN}${path.startsWith("/") ? "" : "/"}${path}`;

  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${IMAGE_CACHE_VERSION}`;
}
