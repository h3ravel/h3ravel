import { describe, expect, test } from 'vitest'

import { Str } from '@h3ravel/support'

describe('Support Package\'s Str', () => {
  test('plural of user is users', () => {
    expect(Str.pluralize('user', 2)).toBe('users')
  })
}) 
