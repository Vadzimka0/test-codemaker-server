import { IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  readonly method: string;

  @IsString()
  readonly login: string;

  @IsString()
  readonly pass: string;

  @IsString()
  readonly ip: string;

  @IsString()
  readonly userAgent: string;
}
