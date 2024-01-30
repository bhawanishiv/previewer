import puppeteer from "puppeteer";

export const submitPreview = async (form: FormData) => {
  'use server';
  const url = form.get("urlInput") as string;
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(url);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  const metadata = await page.evaluate(() => {
    const metaTags = document.querySelectorAll("meta");
    const metadata: Record<string, string | number | null> = {};

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

  console.log(`metadata->`,metadata);

  await browser.close();

  return metadata;
};
