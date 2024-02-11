import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr','es','it'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
//   matcher: ['/', '/(fr|en)/:path*']
matcher:['/((?!api|_next|_vercel|.*\\..*).*)']
};

 
