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

  findAll(): Promise<Usuarios[]> {
    return this.usuariosRepository.find();
  }

  create(usuario: Usuarios): Promise<Usuarios> {
    return this.usuariosRepository.save(usuario);
  }
}
