import { IsNumber, IsString } from 'class-validator';

export class DbConfigDto {
  @IsString()
  readonly host: string;

  @IsNumber()
  readonly port: number;

  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly database: string;
}
