import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Guardias')
export class Guardias {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  usuarioId: number;

  @Column({ type: 'date' })
  fechaInicio: Date;

  @Column({ type: 'date' })
  fechaFin: Date;
}
