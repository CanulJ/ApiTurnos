import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuardiasModule } from './Guardias/guardias.module';
import { Guardias } from './Guardias/guardias.entity';
import { VacacionesModule } from './vacaciones/vacaciones.module';
import { Vacaciones } from './vacaciones/vacaciones.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'yamabiko.proxy.rlwy.net',
      port: 16510,
      username: 'root',
      password: 'CxQEjBqgzCtVWRSjBmcTPefWxMrafJiE',
      database: 'railway',
      entities: [Usuario, Guardias, Vacaciones],
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
