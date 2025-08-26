import { CreateSkillDto } from '../dto/create-skill.dto';
import { UpdateSkillDto } from '../dto/update-skill.dto';
import { Skill } from '../entities/skill.entity';

export interface GatewayBdSkill {
  create(newSkill: CreateSkillDto): Promise<Skill>;
  findById(id: number): Promise<Skill>;
  update(id: number, updateSkill: UpdateSkillDto): Promise<Skill>;
  findAll(): Promise<Skill[]>;
}
