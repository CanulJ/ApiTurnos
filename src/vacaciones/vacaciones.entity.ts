import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vacaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuarioId: number;

  @Column()
  fechaInicio: string;

  @Column()
  fechaFin: string;
}
