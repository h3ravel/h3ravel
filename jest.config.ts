import type { Config } from 'jest'
import { createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform

const jestConfig: Config = {
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    'src': './src',
    'src/(.*)$': './src/$1',
    'app': './src',
    'app/(.*)$': './src/$1',
    'root': './..',
    'root/(.*)$': './$1',
    'config': './src/config',
    'config/(.*)$': './src/config/$1',
    'http': './src/http',
    'http/(.*)$': './src/http/$1',
    'resources': './src/resources',
    'resources/(.*)$': './src/resources/$1',
    'routes': './src/routes',
    'routes/(.*)$': './src/routes/(.*)$'
  },
}

export default jestConfig
