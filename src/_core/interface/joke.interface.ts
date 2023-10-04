import { IBase } from './base.interface';

export interface IJoke extends IBase {
  content?: string;
  upvote?: number;
  downvote?: number
}
