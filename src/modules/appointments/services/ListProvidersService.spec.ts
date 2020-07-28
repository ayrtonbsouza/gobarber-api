import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
// import AppError from '@shared/errors/AppError';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list the providers', async () => {
    const firstProvider = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const secondProvider = await fakeUsersRepository.create({
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Joe Dohn',
      email: 'joedohn@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    await expect(providers).toEqual([firstProvider, secondProvider]);
  });
});
