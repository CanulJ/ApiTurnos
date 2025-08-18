import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Vacacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuarioId: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.id)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

  @Column()
  fechaInicio: string;

  @Column()
  fechaFin: string;
}
