import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Usuarios } from '../usuarios/usuario.entity';
import { ManyToOne, JoinColumn } from 'typeorm';

@Entity('Vacaciones')
export class Vacaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuarioId: number;

  @ManyToOne(() => Usuarios, (usuario) => usuario.id)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuarios;

  @Column({ type: 'date' })
  fechaInicio: string;

  @Column({ type: 'date' })
  fechaFin: string;
}
