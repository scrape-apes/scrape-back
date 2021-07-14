export default async function loadUrl(page, url) {
    try {
        await page.goto(url, {
            timeout: 20000,
            waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
        })
    } catch (error) {
        throw new Error("url " + url + " url not loaded -> " + error)
    }
  }