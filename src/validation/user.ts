import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public name: string;
}
