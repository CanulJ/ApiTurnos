import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from './usuario.entity';

@Controller('usuarios') // ojo: minúscula, que coincida con la URL del frontend
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

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() usuario: Usuarios,
  ): Promise<Usuarios> {
    return this.usuariosService.update(id, usuario);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usuariosService.remove(id);
  }
}
