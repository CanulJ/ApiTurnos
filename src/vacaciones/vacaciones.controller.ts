import { Controller, Get, Post, Body } from '@nestjs/common';
import { VacacionesService } from './vacaciones.service';
import { Vacacion } from './vacaciones.entity';

@Controller('vacaciones')
export class VacacionesController {
  constructor(private readonly vacacionesService: VacacionesService) {}

  @Get()
  getAll(): Promise<Vacacion[]> {
    return this.vacacionesService.findAll();
  }

  @Post()
  create(@Body() vacacion: Vacacion): Promise<Vacacion> {
    return this.vacacionesService.create(vacacion);
  }
}
