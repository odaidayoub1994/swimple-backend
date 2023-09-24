import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { JWTUserDto } from './dto/jwt-user.dto';
import { Role } from './entities/role.enum';
import MESSAGES from 'src/common/messages';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  /**
   * Create JWT token for users
   * @param {user} user
   * @returns JWT token
   */
  async jwtSign(user: JWTUserDto) {
    const payload = { email: user.email, id: user.id, role: user.roles };
    return this.jwtService.sign(payload);
  }
}

/**
 * Auth Guard Middleware for Private routes.
 * Checks if token is valid or not and puts it in req.user object
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const bearerToken = request.headers.authorization.split(' ')[1];
      const payload = this.jwtService.verify(bearerToken);
      request.user = payload;
      return true;
    } catch (error) {
      throw new HttpException(
        MESSAGES.ERROR.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}

/**
 * Roles Guard to protect endpoints with JWT verification and roles check
 * Assigns destructured JWT to the req.user for controllers to access
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}
  canActivate(context: ExecutionContext): boolean {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requireRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    try {
      const bearerToken = request.headers.authorization.split(' ')[1];

      const user = this.jwtService.verify(bearerToken);

      request.user = user;

      const result = requireRoles.some((role) => user.role.includes(role));

      return result;
    } catch (error) {
      throw new HttpException(
        MESSAGES.ERROR.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
