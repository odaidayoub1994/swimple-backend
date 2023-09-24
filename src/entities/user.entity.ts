import COMMON from 'src/common/data';
// import { Role } from 'src/modules/auth/entities/role.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity({ name: COMMON.ENTITIES.USERS })
@Index(['email', 'is_deleted'], { unique: true })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  email: string;

  @Column({ nullable: true })
  password?: string;

  // @Column({
  //   type: 'enum',
  //   enum: Role,
  //   default: Role.BUYER,
  //   nullable: true,
  // })
  // role: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  designation: string;

  @Column({ nullable: true })
  phone_code: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ nullable: true })
  dob: Date;

  @Column({ default: false })
  is_deleted: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date;
}
