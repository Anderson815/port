import { CreateSkillDto } from '../dto/create-skill.dto';
import { UpdateSkillDto } from '../dto/update-skill.dto';
import { Skill } from '../entities/skill.entity';

export interface GatewayBdSkill {
  create(newSkill: CreateSkillDto): Promise<Skill>;
  findById(id: number): Promise<Skill>;
  updateById(id: number, updateSkill: UpdateSkillDto): Promise<Skill>;
  removeById(id: number): Promise<void>;
  findAll(): Promise<Skill[]>;
}
