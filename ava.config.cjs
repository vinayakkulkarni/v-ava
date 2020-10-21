module.exports = {
  require: ['./tests/setup.js'],
  ignoredByWatcher: ['!**/*.{js,vue}'],
  files: ['./tests/specs/**/*'],
  snapshotDir: './tests/specs/snapshots',
  babel: true,
  tap: false,
  verbose: true,
  color: true,
};
