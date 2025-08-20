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
    // Opcional: validar que el usuario exista antes de guardar
    // const usuario = await this.usuariosRepository.findOne({ where: { id: guardia.usuarioId } });
    // if (!usuario) throw new Error('Usuario no existe');

    return this.guardiasRepository.save(guardia);
  }

  // Actualizar una guardia
  async update(id: number, guardia: Guardias): Promise<Guardias> {
    await this.guardiasRepository.update(id, guardia);
    const updated = await this.guardiasRepository.findOne({ where: { id } });
    if (!updated) {
      throw new Error('Guardia no encontrada');
    }
    return updated;
  }

  // Eliminar una guardia
  async remove(id: number): Promise<void> {
    await this.guardiasRepository.delete(id);
  }

  // Opcional: Buscar guardias por usuario
  findByUsuario(usuarioId: number): Promise<Guardias[]> {
    return this.guardiasRepository.find({ where: { usuarioId } });
  }
}
