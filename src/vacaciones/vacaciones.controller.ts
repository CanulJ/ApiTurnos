import { Controller, Get, Post, Body } from '@nestjs/common';
import { VacacionesService } from './vacaciones.service';
import { Vacaciones } from './vacaciones.entity';

@Controller('vacaciones')
export class VacacionesController {
  constructor(private readonly vacacionesService: VacacionesService) {}

  @Get()
  getAll(): Promise<Vacaciones[]> {
    return this.vacacionesService.findAll();
  }

  @Post()
  create(@Body() vacacion: Vacaciones): Promise<Vacaciones> {
    return this.vacacionesService.create(vacacion);
  }
}
