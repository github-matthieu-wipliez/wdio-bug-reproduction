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



async function clickOnButton(element) {
    const location = await element.getLocation()
    const xtap = location.x + 150
    const ytap = location.y + 150

    return browser.touchPerform([{ action: 'tap', options: { x: xtap, y: ytap } }])
}

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    console.log('before navigateTo: ', await browser.getWindowHandles())
    await browser.url("http://localhost:3000/src/ad-served.html");

    console.log('before browser.url: ', await browser.getWindowHandles())

    const button = await waitForElement('.id_clickable')

    await clickOnButton(button)
    await browser.pause(5000)
    console.log(await browser.getTitle()) // returns "JSON"

    const handles = await browser.getWindowHandles()
    console.log('after open json.org ', handles)
    await browser.switchToWindow(handles[0])
    console.log(await browser.getTitle())
    console.log('after switchToWindow: ', await browser.getWindowHandles())
  });
});
