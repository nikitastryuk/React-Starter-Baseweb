const { resolve } = require('path');

const ROOT_DIR = resolve(__dirname, '../');
const SRC_DIR = resolve(ROOT_DIR, './src');
const PUBLIC_DIR = resolve(ROOT_DIR, './public');
const APP_ENTRY = resolve(SRC_DIR, './index.js');
const APP_TEMPLATE = resolve(PUBLIC_DIR, './index.html');
const FAV_ICON = resolve(PUBLIC_DIR, './favicon.ico');
const DIST_DIR = resolve(ROOT_DIR, './build');

const ENV_DEV_FILE = resolve(ROOT_DIR, './.env.development');
const ENV_PROD_FILE = resolve(ROOT_DIR, './.env.production');

const MODES = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

module.exports = {
  APP_ENTRY,
  APP_TEMPLATE,
  FAV_ICON,
  DIST_DIR,
  ENV_DEV_FILE,
  ENV_PROD_FILE,
  MODES,
};
