import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { GatewayBdSkill } from './gateways/gateway-bd-skill';

@Injectable()
export class SkillService {
  constructor(
    @Inject('SkillRepositoryBd')
    private skillRepository: GatewayBdSkill
  ) {}

  async create(createSkillDto: CreateSkillDto) {
    const skillSaved = await this.skillRepository.create(createSkillDto);
    return skillSaved;
  }

  async findAll() {
    const allSkill = await this.skillRepository.findAll();
    return allSkill;
  }

  async findOne(id: number) {
    const skillBd = await this.skillRepository.findById(id);
    if (!skillBd) throw new NotFoundException(`Não foi encontrado a skill ${id}`);

    return skillBd;
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    const skillSave = await this.skillRepository.updateById(id, updateSkillDto);
    return skillSave;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
