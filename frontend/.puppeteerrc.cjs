// On Vercel/serverless, we use @sparticuz/chromium instead of the
// Chrome that puppeteer normally downloads (which can't run on Vercel's
// Linux runtime due to missing system libs like libnspr4).
// This config tells puppeteer to skip downloading its own Chrome.
const isServerless = !!process.env.VERCEL || !!process.env.AWS_LAMBDA_FUNCTION_VERSION;

module.exports = {
  skipDownload: isServerless,
  cacheDirectory: process.env.PUPPETEER_CACHE_DIR
};
