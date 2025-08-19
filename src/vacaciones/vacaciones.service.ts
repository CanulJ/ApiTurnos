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

  // Eliminar
  async remove(id: number): Promise<void> {
    await this.vacacionesRepository.delete(id);
  }

  // Actualizar
  async update(id: number, vacacion: Vacaciones): Promise<Vacaciones> {
    await this.vacacionesRepository.update(id, vacacion);
    const updated = await this.vacacionesRepository.findOne({
      where: { id },
      relations: ['usuario'],
    });
    if (!updated) {
      throw new Error('Vacación no encontrada');
    }
    return updated;
  }
}
