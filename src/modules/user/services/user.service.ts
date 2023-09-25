import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { ILike, Repository } from 'typeorm';
import { Conditions } from 'src/common/interfaces';
import { SignupUserDto } from '../dto/signup-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   * Function to create User.
   * @param {SignupUserDto} signupUserDto
   * @returns {Promise<User>}
   */
  async create(signupUserDto: SignupUserDto): Promise<User> {
    return await this.userRepository.save(signupUserDto);
  }

  /**
   * Function to get User by conditions(email).
   * @param {Conditions} conditions
   * @returns {Promise<User | null>}
   */
  async getUserByEmail(conditions: Conditions): Promise<User | null> {
    const where: any = {
      is_deleted: conditions.is_deleted,
    };

    if (conditions.email) {
      where.email = ILike(conditions.email);
    }

    return await this.userRepository.findOne({
      where,
    });
  }
}
