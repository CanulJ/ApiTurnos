import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';

import { Vacaciones } from './vacaciones.entity';
import { VacacionesService } from './vacaciones.service';

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

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.vacacionesService.remove(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() vacacion: Vacaciones,
  ): Promise<Vacaciones> {
    return await this.vacacionesService.update(id, vacacion);
  }
}
