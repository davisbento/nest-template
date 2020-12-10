import { compare, hash } from 'bcryptjs';

export const hashPassword = (password: string): Promise<string> => hash(password, 12);

export const comparePassword = (password: string, hashedPassword: string): Promise<boolean> =>
  compare(password, hashedPassword);
