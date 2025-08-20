import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuarios')
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ nullable: true })
  correo: string;

  @Column({ nullable: true })
  telefono: string;
}
