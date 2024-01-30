import puppeteer from "puppeteer";

export const preview = async (url: string) => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(url);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  const metadata = await page.evaluate(() => {
    const metaTags = document.querySelectorAll("meta");
    const titleTag = document.querySelector("title");

    const metadata: Record<string, string | number | null> = {};

    if (titleTag) {
      metadata.title = titleTag.textContent;
    }

    const faviconTag =
      document.querySelector('link[rel="icon"]') ||
      document.querySelector('link[rel="shortcut icon"]');

    if (faviconTag) {
      metadata.faviconUrl = faviconTag.getAttribute("href") || null;
    }

    metaTags.forEach((tag) => {
      const name = tag.getAttribute("name");
      const property = tag.getAttribute("property");
      const content = tag.getAttribute("content");

      if (name) {
        metadata[name] = content;
      } else if (property) {
        metadata[property] = content;
      }
    });

    return metadata;
  });

  await browser.close();

  return { data: { url, ...metadata } };
};
