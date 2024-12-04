const capabilities = [
  {
    // platformName: 'Android',
    // 'appium:automationName': 'UiAutomator2',
    // 'appium:deviceName': 'Android',
    // 'appium:appPackage': 'com.android.settings',
    // 'appium:appActivity': '.Settings',

    // platformName: 'iOS',
    // 'appium:platformName': 'iOS',
    // 'appium:platformVersion': '18.1',
    // 'appium:automationName': 'XCUITest',
    // 'appium:deviceName': 'iPhone 14 Pro',

    browserName: "Safari",
    platformName: "iOS",
    "appium:options": {
      deviceName: "iPhone 15",
      automationName: "XCUITest",
      // bundleId: "com.apple.mobilesafari",
      // automationName: "Safari",
      platformVersion: "17.5",
      // app: "/path/to/your.app",
      noReset: true,
      // "safari:useSimulator": true,
      // "safari:deviceType": 'iPhone',
      // "safari:deviceName": "iPhone 16",
    },
  },
];

exports.config = {
  hostname: process.env.APPIUM_HOST || "127.0.0.1",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: "debug",
  specs: ["./test/specs/**/*.js"],
  capabilities,
  services: [
    // [
    //   "appium",
    //   {
    //     args: {
    //       relaxedSecurity: true,
    //       basePath: "/wd/hub",
    //       address: "localhost",
    //     },
    //     command: "appium",
    //   },
    // ],
  ],
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
