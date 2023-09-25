import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import ROUTES from 'src/common/routes';
import MESSAGES from 'src/common/messages';
import { Conditions } from 'src/common/interfaces';
import { HelpersService } from 'src/common/utils/helpers.service';
import { SignupUserDto } from '../dto/signup-user.dto';

@Controller(ROUTES.USER.ROOT)
export class UserController {
  /**
   * We should inject the Service within the constructor.
   */
  constructor(
    private userService: UserService,
    private helpersService: HelpersService,
  ) {}

  /**
   * Signup a user.
   * @param {SignupUserDto} signupUserDto
   * @param {Response} res
   */
  @Post(ROUTES.USER.SIGNUP)
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() signupUserDto: SignupUserDto) {
    const conditions: Conditions = {
      email: signupUserDto?.email,
      is_deleted: false,
    };

    try {
      const userExists = await this.userService.getUserByEmail(conditions);

      if (userExists) {
        throw new HttpException(
          {
            message: MESSAGES.ERROR.ALREADY_EXIST,
          },
          HttpStatus.CONFLICT,
        );
      }

      const hashedPassword = await this.helpersService.encryptPassword(
        signupUserDto?.password,
      );

      const data = { ...signupUserDto, password: hashedPassword };

      const newUser = await this.userService.create(data);

      if (newUser) {
        delete newUser?.password;

        return {
          code: HttpStatus.OK,
          message: MESSAGES.SUCCESS.SUCCESS,
          data: newUser,
        };
      }

      throw new HttpException(
        {
          message: MESSAGES.ERROR.CREATE,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(
        {
          message: error.message || MESSAGES.ERROR.CREATE,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
