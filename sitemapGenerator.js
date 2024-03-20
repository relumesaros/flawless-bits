const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');

const sitemap = new SitemapStream({ hostname: 'https://flawless-bits.com' });

const writeStream = createWriteStream('./build/site_map.xml');
sitemap.pipe(writeStream);

sitemap.write({ url: '/blog/clean-code-functions-and-methods', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/blog/clean-code-proper-naming', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/blog/class-loaders-and-how-they-are-used-in-jvm', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/blog/rest-vs-graphql', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/blog/reactjs-with-usecontext-and-usereducer-hooks-example', changefreq: 'monthly', priority: 0.8 });
sitemap.end();
