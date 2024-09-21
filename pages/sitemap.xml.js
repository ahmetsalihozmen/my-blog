import fs from 'fs';
import path from 'path';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://ahmetsalihozmen.com</loc>
     </url>
     <url>
       <loc>https://ahmetsalihozmen.com/articles</loc>
     </url>
     <url>
       <loc>https://ahmetsalihozmen.com/about</loc>
     </url>
     ${posts
       .map((id) => {
         return `
       <url>
           <loc>${`https://ahmetsalihozmen.com/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getStaticProps({ res }) {
  const posts = require('../src/blog-posts').blogPosts;

  const slugs = posts.map((post) => post.slug);
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(slugs);

  // Write the sitemap to the public directory at build time
  const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(filePath, sitemap);

  // If you want to directly return the XML from this route, for example, as a dynamic sitemap route:
  if (res) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  }

  return {
    props: {}, // No props are needed as we handle this at the file system level.
  };
}
export default SiteMap;