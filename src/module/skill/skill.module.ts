import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { AdapterBdSkillMemory } from './gateways/adapter-bd-skill-memory';

@Module({
  controllers: [SkillController],
  providers: [
    SkillService,
    AdapterBdSkillMemory,
    {
      provide: 'skillRepositoryMemory',
      useExisting: AdapterBdSkillMemory,
    },
  ],
})
export class SkillModule {}
