import { Module } from '@nestjs/common';
import { SkillModule } from './module/skill/skill.module';

@Module({
  imports: [SkillModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
