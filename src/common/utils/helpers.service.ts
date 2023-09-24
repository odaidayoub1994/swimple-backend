/* eslint-disable max-lines-per-function */
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class HelpersService {
  /**
   * Function encrypts password using bcrypt
   * to hash password from salt generated
   * @param {CreateSellerDto} createSellerDto
   * @returns {Promise<string>}
   */
  async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = bcrypt.hash(password, salt);
    return hashedPassword;
  }
}
