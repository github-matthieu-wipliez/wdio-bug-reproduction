async function waitForElement(selector) {
  let element;
  await browser.waitUntil(
    async () => {
      const elementsFound = await $$(selector);
      element = elementsFound[0];
      return !!element;
    },
    {
      timeoutMsg: `Element: ${selector} not does not exist after ${browser.options.waitforTimeout}ms`,
    },
  );
  return element;
}

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await browser.url("http://localhost:3000/src/ad-served.html");
    const fixedIframeElement = await waitForElement(
      "#google_ads_iframe_\\/22474532520\\/velo101\\.com\\/article_2",
    );
    await browser.switchToFrame(fixedIframeElement);
    const divIsindeElement = await waitForElement(".div-bad-scroll");

    divIsindeElement.scrollIntoView({ block: "center" });
    await browser.pause(40000);
  });
});
