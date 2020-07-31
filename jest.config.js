module.exports = {
  moduleFileExtensions: ['js', 'scss'],
  moduleNameMapper: {
    spec_helper: '<rootDir>/spec/spec_helper.js',
  },
  modulePaths: ['spec'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  verbose: true,
}
