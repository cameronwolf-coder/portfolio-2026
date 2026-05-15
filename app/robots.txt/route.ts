export async function GET() {
  const baseUrl = "https://www.cameronwolf.info";

  return new Response(
    [
      "User-Agent: *",
      "Allow: /",
      "Disallow: /api/",
      `Host: ${baseUrl}`,
      `Sitemap: ${baseUrl}/sitemap.xml`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
}
