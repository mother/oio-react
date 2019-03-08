module.exports = {
   rootDir: '../../',
   setupFilesAfterEnv: ['<rootDir>/config/jest/setup.js'],
   testMatch: ['<rootDir>/tests/**/*.js'],
   testPathIgnorePatterns: ['fixtures', 'visual']
}
