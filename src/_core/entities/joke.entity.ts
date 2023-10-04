import { Column, Entity } from 'typeorm';
import { IJoke } from '../interface';
import { BaseEntity } from './base.entity';

@Entity({
  name: 'jokes'
})
export class JokeEntity extends BaseEntity implements IJoke {
  @Column({
    name: 'content',
    type: 'character varying',
    nullable: true
  })
  content?: string;
}
