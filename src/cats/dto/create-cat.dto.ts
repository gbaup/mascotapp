import {
  IsInt,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCatDto {
  @MinLength(2)
  @IsString()
  breed: string;
  @MinLength(2)
  @MaxLength(10)
  @IsString()
  color: string;
  @IsPositive()
  @IsInt()
  age: number;
}
