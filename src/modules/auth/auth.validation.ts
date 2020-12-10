import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserLoginDTO {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public password: string;
}

export class UserRegisterDTO {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public password: string;
}
