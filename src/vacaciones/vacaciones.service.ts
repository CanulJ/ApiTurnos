import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vacaciones } from './vacaciones.entity';

@Injectable()
export class VacacionesService {
  constructor(
    @InjectRepository(Vacaciones)
    private readonly vacacionesRepository: Repository<Vacaciones>,
  ) {}

  findAll(): Promise<Vacaciones[]> {
    return this.vacacionesRepository.find({ relations: ['usuario'] });
  }

  create(vacacion: Vacaciones): Promise<Vacaciones> {
    return this.vacacionesRepository.save(vacacion);
  }
}
