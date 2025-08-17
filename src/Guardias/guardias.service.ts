import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guardia } from './guardias.entity';

@Injectable()
export class GuardiasService {
  constructor(
    @InjectRepository(Guardia)
    private readonly guardiasRepository: Repository<Guardia>,
  ) {}

  // Obtener todas las guardias
  findAll(): Promise<Guardia[]> {
    return this.guardiasRepository.find();
  }

  // Crear una nueva guardia
  async create(guardia: Guardia): Promise<Guardia> {
    // Aquí podrías validar que el usuario exista antes de guardar
    // const usuario = await this.usuariosRepository.findOne({ where: { id: guardia.usuarioId } });
    // if (!usuario) throw new Error('Usuario no existe');

    return this.guardiasRepository.save(guardia);
  }

  // Opcional: Buscar guardias por usuario
  findByUsuario(usuarioId: number): Promise<Guardia[]> {
    return this.guardiasRepository.find({ where: { usuarioId } });
  }
}
