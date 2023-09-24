import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Role } from '../entities/role.enum';

export class JWTUserDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsArray()
  @IsEnum(Role, { each: true })
  roles: Role[];
}
