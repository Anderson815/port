import { Expose } from 'class-transformer';

export class Skill {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  imageUrl: string;
}
