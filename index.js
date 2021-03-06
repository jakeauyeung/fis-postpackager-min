/*
 * fis-postpackager-min
 * http://www.0522.org/
 */

'use strict';
module.exports = function(ret, conf, settings, opt) {
  fis.compile.setup({
    optimize: true,
    unique: opt.unique
  });
  fis.util.map(ret.pkg, function(subpath, file) {
    file.useParser = false;
    file.usePreprocessor = false;
    file.useStandard = false;
    file.usePostprocessor = false;
    file.useLint = false;
    file.useTest = false;
    file.useCache = false;
    file.useOptimiser = true;
    fis.compile(file);
  });
}
