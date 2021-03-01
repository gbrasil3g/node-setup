import { User } from '../models/User';

test('it should be ok', () => {
  const user = new User()

  user.name = 'Guilherme'

  expect(user.name).toEqual('Guilherme')
})