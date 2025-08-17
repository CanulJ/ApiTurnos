import { Controller, Get, Post, Body } from '@nestjs/common';
import { GuardiasService } from './guardias.service';
import { Guardias } from './guardias.entity';

@Controller('guardias')
export class GuardiasController {
  constructor(private readonly guardiasService: GuardiasService) {}

  // GET /guardias -> obtener todas las guardias
  @Get()
  getAll(): Promise<Guardias[]> {
    return this.guardiasService.findAll();
  }

  // POST /guardias -> crear una nueva guardia
  @Post()
  create(@Body() guardia: Guardias): Promise<Guardias> {
    return this.guardiasService.create(guardia);
  }
}
