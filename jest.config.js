// https://jestjs.io/docs/configuration
module.exports = {
  moduleFileExtensions: ['js', 'scss'],
  moduleNameMapper: {
    SpecHelper: '<rootDir>/spec/SpecHelper.js',
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '.circleci',
    '.github',
    '.vscode',
    'brands',
    'components',
    'dist',
    'docs',
    'node_modules',
    'public',
    'scss',
    'theme',
  ],
  verbose: true,
}
