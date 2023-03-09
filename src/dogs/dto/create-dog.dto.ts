import { IsPositive, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDogDto {
  id: string;
  @MinLength(2)
  @IsString()
  name: string;
  @MinLength(2)
  @IsString()
  breed: string;
  @MinLength(2)
  @MaxLength(10)
  @IsString()
  color: string;
  @IsPositive()
  age: number;
}
