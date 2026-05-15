function sitemapXml(urls: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>
`;
}

export async function GET() {
  const urls = [
    "https://www.cameronwolf.info",
    "https://www.cameronwolf.info/case-studies/truv",
    "https://www.cameronwolf.info/case-studies/zappyride",
    "https://www.cameronwolf.info/case-studies/sweet-express",
    "https://www.cameronwolf.info/case-studies/inspiration-mobility",
  ];

  return new Response(sitemapXml(urls), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
