import { Controller, Get, Post, Body } from '@nestjs/common';
import { GuardiasService } from './guardias.service';
import { Guardia } from './guardias.entity';

@Controller('guardias')
export class GuardiasController {
  constructor(private readonly guardiasService: GuardiasService) {}

  // GET /guardias -> obtener todas las guardias
  @Get()
  getAll(): Promise<Guardia[]> {
    return this.guardiasService.findAll();
  }

  // POST /guardias -> crear una nueva guardia
  @Post()
  create(@Body() guardia: Guardia): Promise<Guardia> {
    return this.guardiasService.create(guardia);
  }
}
