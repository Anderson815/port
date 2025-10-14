import { Injectable } from '@nestjs/common';
import { GatewayBdSkill } from './gateway-bd-skill';
import { PrismaService } from 'src/config/bd/prisma.service';
import { CreateSkillDto } from '../dto/create-skill.dto';
import { Skill } from '../entities/skill.entity';
import { UpdateSkillDto } from '../dto/update-skill.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AdapterBdSkillPrisma implements GatewayBdSkill {
  constructor(private readonly prisma: PrismaService) {}

  async create(newSkill: CreateSkillDto): Promise<Skill> {
    const skillBd = await this.prisma.skillEntity.create({ data: newSkill });
    return plainToInstance(Skill, skillBd, { excludeExtraneousValues: true });
  }

  async findAll(): Promise<Skill[]> {
    const listSkillBd = await this.prisma.skillEntity.findMany();
    return plainToInstance(Skill, listSkillBd, { excludeExtraneousValues: true });
  }

  async findById(id: number): Promise<Skill> {
    const skillBd = await this.prisma.skillEntity.findUnique({
      where: {
        id,
      },
    });

    return plainToInstance(Skill, skillBd, { excludeExtraneousValues: true });
  }

  async updateById(id: number, updateSkill: UpdateSkillDto): Promise<Skill> {
    const skillBd = await this.prisma.skillEntity.update({
      where: {
        id,
      },
      data: updateSkill,
    });

    return plainToInstance(Skill, skillBd, { excludeExtraneousValues: true });
  }
}
