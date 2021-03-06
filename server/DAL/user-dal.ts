import { getRepository } from 'typeorm';
import { User } from '../src/entity/User';

export const getAll = async () => getRepository(User).find();

export const getUserById = async (id: number) =>
  getRepository(User).findOne(id);

export const saveUser = async (user: User) => getRepository(User).insert(user);

export const getUserByEmail = async (email: string) =>
  getRepository(User).findOne({ email });

export const updateUser = async (user: User) =>
  getRepository(User).save(user);
