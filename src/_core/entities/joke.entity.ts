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

  @Column({
    name: 'upvote',
    type: 'numeric',
    default: 0
  })
  upvote?: number;

  @Column({
    name: 'downvote',
    type: 'numeric',
    default: 0
  })
  downvote?: number;
}
