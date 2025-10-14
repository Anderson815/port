import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { AdapterBdSkillMemory } from './gateways/adapter-bd-skill-memory';
import { PrismaModule } from 'src/config/bd/prisma.module';
import { AdapterBdSkillPrisma } from './gateways/adapter-bd-skill-prisma';

@Module({
  imports: [PrismaModule],
  controllers: [SkillController],
  providers: [
    SkillService,
    AdapterBdSkillMemory,
    AdapterBdSkillPrisma,
    {
      provide: 'SkillRepositoryMemory',
      useExisting: AdapterBdSkillMemory,
    },
    {
      provide: 'SkillRepositoryBd',
      useExisting: AdapterBdSkillPrisma,
    },
  ],
})
export class SkillModule {}
