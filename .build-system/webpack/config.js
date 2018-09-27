const {
  UP, SRC, DIST, PUBLIC, INDEX_JS, INDEX_HTML,
  BUILD_SYSTEM, ESLINT, ESLINTRC_JS, STYLELINT, STYLELINTRC_JS,
} = require('./const');
const { makePath, makeRelativePath } = require('./utils');

const projectRoot = makePath(UP, UP, 'app');
const srcPath = makePath(projectRoot, SRC);
const buildPath = makePath(projectRoot, DIST);
const publicPath = makePath(projectRoot, PUBLIC);

const indexJsPath = makePath(srcPath, INDEX_JS);
const indexHtmlPath = makePath(publicPath, INDEX_HTML);

const esLintConfigPath = makePath(UP, ESLINT, ESLINTRC_JS);
const stylelintConfigPath = makeRelativePath(
  BUILD_SYSTEM, STYLELINT, STYLELINTRC_JS,
);

const projectPath = {
  root: projectRoot,
  src: srcPath,
  build: buildPath,
  public: publicPath,

  indexJs: indexJsPath,
  indexHtml: indexHtmlPath,
};

const configPath = {
  esLint: esLintConfigPath,
  stylelint: stylelintConfigPath,
}

module.exports = {
  projectPath,
  configPath,
};
