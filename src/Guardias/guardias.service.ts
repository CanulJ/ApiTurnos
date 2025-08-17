import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guardias } from './guardias.entity';

@Injectable()
export class GuardiasService {
  constructor(
    @InjectRepository(Guardias)
    private readonly guardiasRepository: Repository<Guardias>,
  ) {}

  // Obtener todas las guardias
  findAll(): Promise<Guardias[]> {
    return this.guardiasRepository.find();
  }

  // Crear una nueva guardia
  async create(guardia: Guardias): Promise<Guardias> {
    // Aquí podrías validar que el usuario exista antes de guardar
    // const usuario = await this.usuariosRepository.findOne({ where: { id: guardia.usuarioId } });
    // if (!usuario) throw new Error('Usuario no existe');

    return this.guardiasRepository.save(guardia);
  }

  // Opcional: Buscar guardias por usuario
  findByUsuario(usuarioId: number): Promise<Guardias[]> {
    return this.guardiasRepository.find({ where: { usuarioId } });
  }
}
