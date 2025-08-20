import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuarios } from './usuarios/usuario.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuardiasModule } from './Guardias/guardias.module';
import { Guardias } from './Guardias/guardias.entity';
import { VacacionesModule } from './vacaciones/vacaciones.module';
import { Vacaciones } from './vacaciones/vacaciones.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-1-us-east-2.pooler.supabase.com',
      port: 6543,
      username: 'postgres.qtpadxvjdkorwmaxpzba',
      password: 'Jesus2004Canul',
      database: 'postgres',
      entities: [Usuarios, Guardias, Vacaciones],
      synchronize: false,
    }),
    UsuariosModule,
    GuardiasModule,
    VacacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
