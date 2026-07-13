// @ts-check
import { defineConfig } from 'astro/config';

// When custom domain (sanyoghoney.com) is configured:
//   site: 'https://sanyoghoney.com', base: '/'
// Until then, serve under GitHub Pages project subpath:
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

export default defineConfig({
  site: isCustomDomain ? 'https://sanyoghoney.com' : 'https://sukhmeet2390.github.io',
  base: isCustomDomain ? '/' : '/sanyonghoney/',
  output: 'static',
});
