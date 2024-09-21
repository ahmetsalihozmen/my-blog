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

export async function getServerSideProps({ res }) {
  const posts = require('../src/blog-posts').blogPosts

  const slugs = posts.map(post => post.slug)
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(slugs);



  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;