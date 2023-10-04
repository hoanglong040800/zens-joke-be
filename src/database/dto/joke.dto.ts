import { IsNotEmpty, IsOptional } from 'class-validator';
import { IJoke } from '../interface';

export class JokeDto implements IJoke {
  @IsNotEmpty()
  id: string;

  @IsOptional()
  content?: string;
}
