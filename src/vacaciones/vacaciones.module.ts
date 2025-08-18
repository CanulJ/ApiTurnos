import { Module } from '@nestjs/common';
import { VacacionesService } from './vacaciones.service';
import { VacacionesController } from './vacaciones.controller';

@Module({
  providers: [VacacionesService],
  controllers: [VacacionesController],
})
export class VacacionesModule {}
