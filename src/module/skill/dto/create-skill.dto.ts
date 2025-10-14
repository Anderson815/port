import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSkillDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsOptional()
  @IsString()
  @Expose()
  description: string;

  @IsOptional()
  @IsString()
  @Expose()
  imageUrl?: string;
}
