// create-user.dto.ts

import { IsDate, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @IsDate()
  readonly birthday: Date;

  @IsString()
  readonly password: string;
}
