import { createJsWithTsEsmPreset, type JestConfigWithTsJest } from 'ts-jest'
import { pathsToModuleNameMapper } from 'ts-jest'

const tsJestTransformCfg = createJsWithTsEsmPreset().transform

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
  },
  roots: ['<rootDir>'],
  testMatch: ['**/tests/**/*.test.ts'],
  modulePaths: ['.'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^App/(.*)$': '<rootDir>/src/app/$1',
    '^root/(.*)$': '<rootDir>/$1',
    '^config/(.*)$': '<rootDir>/src/config/$1',
    '^routes/(.*)$': '<rootDir>/src/routes/$1',
    '^resources/(.*)$': '<rootDir>/src/resources/$1',
  },
  transformIgnorePatterns: ['!node_modules/(?!@h3ravel)'],
}

export default jestConfig
