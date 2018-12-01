module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'node'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ],
  transformIgnorePatterns: ['node_modules/(?!(vuejs-datepicker/dist)/)', 'node_modules/(?!(bootstrap-vue)/)'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/node_modules/**'
  ],
  coverageReporters: ['html'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'node',
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  testPathIgnorePatterns: [
    '/build/',
    '/config/',
    '/data/',
    '/dist/',
    '/node_modules/',
    '/test/',
    '/vendor/'
  ]
}
