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
  await element.click()

  const location = await element.getLocation()
  const xtap = location.x + 150
  const ytap = location.y + 150
  
  const contexts = await browser.getContexts()
  await browser.switchContext('NATIVE_APP')

  // console.log('getWindowHandle after browser.switchContext(NATIVE_APP): ', await browser.getWindowHandle())

  // // await element.click()

  // await driver.tap([xtap, ytap ])
//   await driver.pointerDown(element.elementId)
//   args.put("element", ((MobileElement) element).getId());
// args.put("x", 2);
// args.put("y", 2);
// driver.executeScript("mobile: tap", args);

  await driver.execute("mobile: tap", { x: xtap, y: ytap })

  // console.log('getWindowHandle after browser.switchContext(NATIVE_APP): ', await browser.getWindowHandle())
  await browser.switchContext(contexts[1])
}

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    console.log('before navigateTo: ', await browser.getWindowHandles())
    await browser.url("http://localhost:3000/src/ad-served.html");

    console.log('getContext before browser.url: ', await browser.getContext())
    console.log('getContexts before browser.url: ', await browser.getContexts())
    console.log('getWindowHandle before browser.url: ', await browser.getWindowHandle())

    const button = await waitForElement('#id_clickable')

    await clickOnButton(button)
    await browser.pause(5000)
    console.log(await browser.getTitle()) // returns "JSON"

    console.log('getWindowHandles after browser.url: ', await browser.getWindowHandles())
    console.log('getContexts after browser.url: ', await browser.getContexts())

    console.log('switching context')
    await browser.switchContext('NATIVE_APP')
    console.log('context switched')

    const handles = await browser.getWindowHandles()
    console.log('after open json.org ', handles)

    console.log('after open json.org: ', await browser.getWindowHandles())
    console.log('after open json.org: ', await browser.getContexts())
    await browser.switchToWindow(handles[0])
    console.log(await browser.getTitle())
    console.log('after switchToWindow: ', await browser.getWindowHandles())
  });
});
