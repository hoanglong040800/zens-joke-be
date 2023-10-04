import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { IBase } from '../interface';

@Entity()
export class BaseEntity implements IBase {
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp with time zone'
  })
  updatedAt: Date;

  @Column({
    name: 'created_by',
    type: 'character varying',
    nullable: true
  })
  createdBy: string;

  @Column({
    name: 'updated_by',
    type: 'character varying',
    nullable: true
  })
  updatedBy: string;

  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;
}
