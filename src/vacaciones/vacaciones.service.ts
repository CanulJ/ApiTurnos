import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vacacion } from './vacaciones.entity';

@Injectable()
export class VacacionesService {
  constructor(
    @InjectRepository(Vacacion)
    private readonly vacacionesRepository: Repository<Vacacion>,
  ) {}

  // Obtener todas las vacaciones
  findAll(): Promise<Vacacion[]> {
    return this.vacacionesRepository.find({
      relations: ['usuario'], // si quieres traer también los datos del usuario
    });
  }

  // Crear una nueva vacación
  create(vacacion: Vacacion): Promise<Vacacion> {
    const nuevaVacacion = this.vacacionesRepository.create(vacacion);
    return this.vacacionesRepository.save(nuevaVacacion);
  }

  // Opcional: buscar vacaciones de un usuario específico
  findByUsuario(usuarioId: number): Promise<Vacacion[]> {
    return this.vacacionesRepository.find({
      where: { usuarioId },
      relations: ['usuario'],
    });
  }
}
