export function prefetchImages(urls = []) {
  if (typeof document === "undefined") return;

  urls.forEach((url) => {
    if (!url) return;

    const already = document.querySelector(
      `link[rel="prefetch"][href="${url}"]`
    );
    if (already) return;

    const link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  });
}