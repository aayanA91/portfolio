import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://aayan-portfolio-three.vercel.app' });

// Add your routes


streamToPromise(sitemap).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
  console.log('✅ Sitemap generated successfully!');
});
