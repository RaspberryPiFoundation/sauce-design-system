module.exports = {
  moduleFileExtensions: ['js', 'scss'],
  moduleNameMapper: {
    SpecHelper: '<rootDir>/spec/SpecHelper.js',
  },
  modulePaths: ['spec'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  verbose: true,
}
