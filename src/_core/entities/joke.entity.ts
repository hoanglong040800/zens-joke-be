import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IJoke } from '../interface';

@Entity()
export class JokeEntity implements IJoke {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  content?: string;
}
