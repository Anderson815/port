import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from '../dto/create-skill.dto';
import { Skill } from '../entities/skill.entity';
import { GatewayBdSkill } from './gateway-bd-skill';
import { plainToClass } from 'class-transformer';
import { UpdateSkillDto } from '../dto/update-skill.dto';

@Injectable()
export class AdapterBdSkillMemory implements GatewayBdSkill {
  listSkills: Skill[];

  constructor() {
    this.listSkills = [];
  }

  async create(newSkill: CreateSkillDto): Promise<Skill> {
    const id = this.listSkills.length;

    const skillToSave = plainToClass(Skill, newSkill, { excludeExtraneousValues: true });
    skillToSave.id = id;

    this.listSkills.push(skillToSave);

    return skillToSave;
  }

  async findById(id: number): Promise<Skill> {
    return this.listSkills[id];
  }

  async update(id: number, updateSkill: UpdateSkillDto): Promise<Skill> {
    const skillToSave = this.listSkills[id];

    skillToSave.description = updateSkill.description ?? skillToSave.description;
    skillToSave.imageUrl = updateSkill.imageUrl ?? skillToSave.imageUrl;
    skillToSave.name = updateSkill.name ?? skillToSave.name;

    this.listSkills[id] = skillToSave;

    return skillToSave;
  }

  async findAll(): Promise<Skill[]> {
    return this.listSkills;
  }
}
