import {
  IsEmail,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  lastname: string;
  @IsString()
  @MinLength(4)
  @MaxLength(10)
  username: string;
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
}
