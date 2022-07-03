import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  collectCoverage: true, //  Statistical coverage
  coverageDirectory: 'coverage', //  The folder where the coverage results are output
  coverageThreshold: {
    //  Total coverage requirements for all files
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
    //  The coverage requirement of the matched single file
    //  Wildcard configuration is also supported here
    '<rootDir>/src/**/*.{ts,tsx}': {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
  transform: {
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  moduleNameMapper: { '\\.svg$': '<rootDir>/src/test/__mocks__/svg.tsx' },
}

export default config
