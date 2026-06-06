const BACKEND_ORIGIN = "https://agcc26-backend.onrender.com";

export function getImageUrl(path) {
  if (!path) return "";

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (path.startsWith("//")) {
    return `https:${path}`;
  }

  if (path.startsWith("res.cloudinary.com")) {
    return `https://${path}`;
  }

  return `${BACKEND_ORIGIN}${path.startsWith("/") ? "" : "/"}${path}`;
}
