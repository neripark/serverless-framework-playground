// declare module 'lighthouse';
// declare module 'lighthouse-logger';

const lighthouse = require('lighthouse');
const log = require('lighthouse-logger');
const chromeLauncher = require('chrome-launcher');

const opts = {
  chromeFlags: ["--headless", "--disable-gpu"],
  //chromeFlags: ["--disable-gpu"],
  logLevel: "info"
};
log.setLevel(opts.logLevel);

function launchChromeAndRunLighthouse(url: string, opts: any, config = null) {
  return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then((chrome: any) => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then((results: any) => {
      // results.lhr はよく見るスコアリングの元データ
      // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
      const {
        // "time-to-first-byte": ttfb,
        // "first-contentful-paint": fcp,
        // "first-meaningful-paint": fmp,
        // "speed-index": speedindex,
        // interactive,
        metrics,
      } = results.lhr.audits;

      return chrome.kill().then(() => ({
        // TTFB: Math.round(ttfb.numericValue),
        FIRST_PAINT: metrics.details.items[0].observedFirstPaint,
        // FMP: Math.round(fmp.numericValue),
        // FCP: Math.round(fcp.numericValue),
        // SPEED_INDEX: Math.round(speedindex.numericValue),
        // TTI: Math.round(interactive.numericValue),
      }));
    });
  });
}


// _________________________________________________
//

export const execLighthouse = () => {
  launchChromeAndRunLighthouse("https://google.com", opts).then((results: any) => {
    // 一旦標準出力に表示
    console.table(results);
  });

  return "done.";
}

execLighthouse();
