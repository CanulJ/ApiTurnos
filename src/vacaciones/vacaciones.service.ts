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

  // Obtener todas las vacaciones
  findAll(): Promise<Vacaciones[]> {
    return this.vacacionesRepository.find({
      relations: ['usuario'], // si quieres traer también los datos del usuario
    });
  }

  // Crear una nueva vacación
  create(vacacion: Vacaciones): Promise<Vacaciones> {
    const nuevaVacacion = this.vacacionesRepository.create(vacacion);
    return this.vacacionesRepository.save(nuevaVacacion);
  }

  // Opcional: buscar vacaciones de un usuario específico
  findByUsuario(usuarioId: number): Promise<Vacaciones[]> {
    return this.vacacionesRepository.find({
      where: { usuarioId },
      relations: ['usuario'],
    });
  }
}
