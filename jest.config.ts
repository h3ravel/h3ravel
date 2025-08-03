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
    'src': './src',
    'src/(.*)$': './src/$1',
    'App': './src/app',
    'App/(.*)$': './src/app/$1',
    'root': './..',
    'root/(.*)$': './$1',
    'config': './src/config',
    'config/(.*)$': './src/config/$1',
    'http': './src/http',
    'http/(.*)$': './src/http/$1',
    'resources': './src/resources',
    'resources/(.*)$': './src/resources/$1',
    'routes': './src/routes',
    'routes/(.*)$': './src/routes/(.*)$',
  },
  transformIgnorePatterns: ['!node_modules/(?!@h3ravel)'],
}

export default jestConfig
