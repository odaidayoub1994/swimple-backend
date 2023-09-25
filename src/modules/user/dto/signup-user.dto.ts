import {
  IsEmail,
  Matches,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class SignupUserDto {
  @IsNotEmpty()
  @IsEmail()
  @Matches(
    /^(([^<>()[\]\\.,;:\s@"']+(.[^<>()[\]\\.,;:\s@"']+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  )
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  phone_code: string;

  @IsNotEmpty()
  @IsString()
  phone_number: string;
}
