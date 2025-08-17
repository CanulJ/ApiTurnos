import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardiasController } from './guardias.controller';
import { GuardiasService } from './guardias.service';
import { Guardias } from './guardias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guardias])],
  controllers: [GuardiasController],
  providers: [GuardiasService],
})
export class GuardiasModule {}
