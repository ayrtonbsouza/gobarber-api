import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findAllProviders(data: IFindAllProvidersDTO): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
