// https://jestjs.io/docs/configuration
module.exports = {
  moduleFileExtensions: ['js', 'scss'],
  moduleNameMapper: {
    SpecHelper: '<rootDir>/spec/SpecHelper.js',
  },
  modulePaths: ['spec'],
  notify: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '.cache',
    '.circleci',
    '.github',
    '.storybook',
    'brands',
    'components',
    'docs',
    'node_modules',
    'scss',
  ],
  verbose: true
}
