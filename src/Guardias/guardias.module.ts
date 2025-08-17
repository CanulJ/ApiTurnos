import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardiasController } from './guardias.controller';
import { GuardiasService } from './guardias.service';
import { Guardia } from './guardias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guardia])],
  controllers: [GuardiasController],
  providers: [GuardiasService],
})
export class GuardiasModule {}
