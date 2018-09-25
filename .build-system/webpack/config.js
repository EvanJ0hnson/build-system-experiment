const { UP, SRC, DIST, PUBLIC, INDEX_JS, INDEX_HTML } = require('./const');
const { makePath } = require('./utils');

const projectRoot = makePath(UP, UP);
const srcPath = makePath(projectRoot, SRC);
const buildPath = makePath(projectRoot, DIST);
const publicPath = makePath(projectRoot, PUBLIC);

const indexJsPath = makePath(srcPath, INDEX_JS);
const indexHtmlPath = makePath(publicPath, INDEX_HTML);

const projectPath = {
  root: projectRoot,
  src: srcPath,
  build: buildPath,
  public: publicPath,

  indexJs: indexJsPath,
  indexHtml: indexHtmlPath,
};

module.exports = {
  projectPath,
};
