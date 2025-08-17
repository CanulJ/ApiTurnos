import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuardiasModule } from './Guardias/guardias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'yamabiko.proxy.rlwy.net',
      port: 16510,
      username: 'root',
      password: 'CxQEjBqgzCtVWRSjBmcTPefWxMrafJiE',
      database: 'railway',
      entities: [Usuario],
      synchronize: false,
    }),
    UsuariosModule,
    GuardiasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
