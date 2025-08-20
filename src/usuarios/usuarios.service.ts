import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private usuariosRepository: Repository<Usuarios>,
  ) {}

  // Traer todos
  findAll(): Promise<Usuarios[]> {
    return this.usuariosRepository.find();
  }

  // Crear usuario
  create(usuario: Usuarios): Promise<Usuarios> {
    return this.usuariosRepository.save(usuario);
  }

  // Actualizar usuario
  async update(id: number, usuario: Usuarios): Promise<Usuarios> {
    await this.usuariosRepository.update(id, usuario);
    const updated = await this.usuariosRepository.findOne({ where: { id } });
    if (!updated) {
      throw new Error('Usuario no encontrado');
    }
    return updated;
  }

  // Eliminar usuario
  async remove(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }
}
