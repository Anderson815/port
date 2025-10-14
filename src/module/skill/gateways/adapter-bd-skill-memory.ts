import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from '../dto/create-skill.dto';
import { Skill } from '../entities/skill.entity';
import { GatewayBdSkill } from './gateway-bd-skill';
import { plainToClass } from 'class-transformer';
import { UpdateSkillDto } from '../dto/update-skill.dto';

@Injectable()
export class AdapterBdSkillMemory implements GatewayBdSkill {
  listSkills: Skill[];
  newId: number;

  constructor() {
    this.listSkills = [];
    this.newId = 0;
  }

  async create(newSkill: CreateSkillDto): Promise<Skill> {
    const skillToSave = plainToClass(Skill, newSkill, { excludeExtraneousValues: true });
    skillToSave.id = this.generateId();

    this.listSkills.push(skillToSave);

    return skillToSave;
  }

  async findById(id: number): Promise<Skill> {
    const skill = this.listSkills.find((skill) => skill.id === id);
    return skill;
  }

  async updateById(id: number, updateSkill: UpdateSkillDto): Promise<Skill> {
    const skillToSave = await this.findById(id);
    this.removeById(id);

    skillToSave.description = updateSkill.description ?? skillToSave.description;
    skillToSave.imageUrl = updateSkill.imageUrl ?? skillToSave.imageUrl;
    skillToSave.name = updateSkill.name ?? skillToSave.name;

    this.listSkills.push(skillToSave);

    return skillToSave;
  }

  async findAll(): Promise<Skill[]> {
    return this.listSkills;
  }

  async removeById(id: number) {
    const indexToRemove = this.listSkills.findIndex((skill) => skill.id === id);
    this.listSkills.splice(indexToRemove, 1);
  }

  private generateId() {
    this.newId += 1;
    return this.newId;
  }
}
