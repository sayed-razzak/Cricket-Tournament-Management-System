const BACKEND_ORIGIN = "https://agcc26-backend.onrender.com";

export function getImageUrl(path) {
  if (!path) return "";

  const url =
    path.startsWith("http://") || path.startsWith("https://")
      ? path
      : `${BACKEND_ORIGIN}${path.startsWith("/") ? "" : "/"}${path}`;

  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}v=${Date.now()}`;
}
