
const fs = require("fs");

const libDetectorSource = fs.readFileSync(
  require.resolve('js-library-detector/library/libraries.js'), 'utf8');

  console.log(libDetectorSource);
