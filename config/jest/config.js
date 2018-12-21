module.exports = {
   rootDir: '../../',
   setupTestFrameworkScriptFile: require.resolve('./setup.js'),
   testMatch: ['<rootDir>/tests/**/*.js'],
   testPathIgnorePatterns: ['__fixtures__']
}
