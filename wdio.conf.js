exports.config = {
  runner: 'local',

  specs: ['./test/specs/**/*.js'],

  exclude: [
  ],

  maxInstances: 10,

  user: SAUCE_USERNAME,
  key: SAUCE_ACCESSKEY,

  region: 'eu',

  capabilities: [
    {
      platformName: 'iOS',
      browserName: 'safari',
      'appium:deviceName': 'iPhone 15 Simulator',
      'appium:platformVersion': 'current_major',
      'appium:automationName': 'XCUITest',
      'appium:platformVersion': '17.0',
      'sauce:options': {
        // appiumVersion is mandatory to use Appium 2 on Sauce Labs
        appiumVersion: '2.1.3',
        tunnelIdentifier: undefined,
        build: "debug-build | " + Date().toString(),
        // armRequired: true,
      }
    },
    {
      platformName: 'iOS',
      browserName: 'safari',
      'appium:deviceName': 'iPhone 15 Simulator',
      'appium:platformVersion': 'current_major',
      'appium:automationName': 'XCUITest',
      'appium:platformVersion': '17.5',
      'sauce:options': {
        // appiumVersion is mandatory to use Appium 2 on Sauce Labs
        appiumVersion: '2.1.3',
        tunnelIdentifier: undefined,
        build: "debug-build | " + Date().toString(),
        armRequired: true,
      },
    },
  ],

  logLevel: 'warn',

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,


  services: [
    [
      'sauce',
      {
        // use the existing tunnel if TUNNEL_NAME is specified, otherwise start a new one (local dev)
        sauceConnect: true,
        sauceConnectOpts: {
          logfile: './sc.log',
        },
      },
    ],
  ],
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
}
