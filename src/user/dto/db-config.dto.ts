import { IsString } from 'class-validator';

export class DbConfigDto {
  @IsString()
  readonly host: string;

  // @IsNumber()
  // readonly port: number;

  @IsString()
  readonly username: string;

  @IsString()
  readonly pass: string;

  @IsString()
  readonly database: string;
}
