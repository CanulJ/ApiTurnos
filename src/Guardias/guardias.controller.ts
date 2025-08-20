import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { GuardiasService } from './guardias.service';
import { Guardias } from './guardias.entity';

@Controller('guardias')
export class GuardiasController {
  constructor(private readonly guardiasService: GuardiasService) {}

  // Obtener todas las guardias
  @Get() getAll(): Promise<Guardias[]> {
    return this.guardiasService.findAll();
  }

  // Crear una nueva guardia
  @Post() create(@Body() guardia: Guardias): Promise<Guardias> {
    return this.guardiasService.create(guardia);
  }

  // Actualizar guardia por id
  @Put(':id') update(
    @Param('id') id: number,
    @Body() guardia: Guardias,
  ): Promise<Guardias> {
    return this.guardiasService.update(id, guardia);
  }

  // Eliminar guardia por id
  @Delete(':id') remove(@Param('id') id: number): Promise<void> {
    return this.guardiasService.remove(id);
  }
}
