import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from './usuario.entity';

@Controller('Usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  getAll(): Promise<Usuarios[]> {
    return this.usuariosService.findAll();
  }

  @Post()
  create(@Body() usuario: Usuarios): Promise<Usuarios> {
    return this.usuariosService.create(usuario);
  }
}
