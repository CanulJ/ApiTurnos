import { Module } from '@nestjs/common';
import { VacacionesService } from './vacaciones.service';
import { VacacionesController } from './vacaciones.controller';
import { Vacaciones } from './vacaciones.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Vacaciones])],
  providers: [VacacionesService],
  controllers: [VacacionesController],
})
export class VacacionesModule {}
