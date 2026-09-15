/**
 * Resolves a given path against Astro's configured BASE_URL.
 * Supports internal routes (e.g. "/clinic", "/doctors") and asset paths (e.g. "/assets/aurea/...").
 */
export function getRelativePath(path: string | undefined | null): string {
  if (!path) return import.meta.env.BASE_URL || '/';

  // Do not alter external URLs or non-path URIs
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#') ||
    path.startsWith('data:')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure base ends with a slash before appending cleanPath
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
}

/**
 * Checks if the current pathname corresponds to the homepage.
 * Correctly accounts for Astro's BASE_URL both in development and production (GitHub Pages).
 */
export function isHomePage(pathname: string): boolean {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') && base.length > 1 ? base.slice(0, -1) : base;
  const normalizedPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

  return (
    normalizedPath === normalizedBase ||
    normalizedPath === '' ||
    normalizedPath === '/'
  );
}
