import createMiddleware from "next-intl/middleware";

// The middleware intercepts requests to `/` and will redirect
// to the best matching locale instead (e.g. `/en`). A cookie
// is set in the background, so if the user switches to a new
// language, this will take precedence from now on.
export default createMiddleware({
  locales: ["en", "jp"],
  defaultLocale: "en",
  localePrefix: 'always'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
