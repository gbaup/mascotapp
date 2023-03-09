import { IsString, IsUrl, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MaxLength(300)
  text: string;
  @IsString()
  @IsUrl()
  imageurl: string;
}
