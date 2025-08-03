import { pluralize } from '@h3ravel/support'

describe('Support Package\'s Str', () => {
  test('plural of user is users', () => {
    expect(pluralize('user', 2)).toBe('users')
  })
}) 
