import { IsArray, IsOptional } from 'class-validator';

export class GetJokesParam {
  @IsOptional()
  @IsArray()
  readJokeIds?: number[];
}
