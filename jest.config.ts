import { createJsWithTsEsmPreset, type JestConfigWithTsJest } from 'ts-jest'

const tsJestTransformCfg = createJsWithTsEsmPreset().transform

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
  },
  roots: ['<rootDir>'],
  testMatch: ['**/tests/**/*.test.ts'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^App/(.*)$': '<rootDir>/src/app/$1',
    '^root/(.*)$': '<rootDir>/$1',
    '^http/(.*)$': '<rootDir>/http/$1',
    '^config/(.*)$': '<rootDir>/config/$1',
    '^routes/(.*)$': '<rootDir>/routes/$1',
    '^resources/(.*)$': '<rootDir>/resources/$1',
  },
  transformIgnorePatterns: ['!node_modules/(?!@h3ravel)'],
}

export default jestConfig
