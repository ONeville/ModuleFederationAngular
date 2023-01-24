
const concat = require("concat");
const fse = require("fs-extra");
const path = require('path');

(async function build() {
  let dir = path.dirname(path.join(process.cwd(), 'dist/webcomponents/test.f'));
  if(!(await fse.exists(dir))) await fse.mkdir(dir);

  dir = path.dirname(path.join(process.cwd(), 'dist/webcomponents/lib-test/mc.f'));

  if(!(await fse.exists(dir))) await fse.mkdir(dir);
  
  const files = [
    "./dist/apps/lib-test/runtime.js",
    "./dist/appslib-test/polyfills.js",
    "./dist/apps/lib-test/main.js",
  ];
  await concat(files, dir + "/lib-test.js");
  await fse.copy(
    path.join(process.cwd(), 'dist/libs/lib-test/assets'),
    path.join(dir, 'assets')
  );
  ['package.json', 'README.md'].forEach(async f => {
    await fse.copyFile(
      path.join(process.cwd(), 'apps/lib-test-wc', f),
      path.join(dir, f)
      );
  });
})();

// https://github.com/MarsiBarsi/angular-library-to-web-components-demo
//     "pack:du-wc": "nx run lib-test-wc:build --configuration=production && node ./apps/lib-test-wc/build-wc.js && cd dist/webcomponents/lib-test && npm pack",
