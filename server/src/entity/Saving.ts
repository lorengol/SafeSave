import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BankAccount } from './BankAccount';
import { User } from './User';

@Entity('savings')
class Saving {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @OneToOne((type) => User, {
    eager: true,
    onDelete: 'CASCADE',
  })

  @JoinColumn({name: 'user_id'})
  user: User;

  @Column()
  savings: number;

  @Column()
  date: Date;
}
export { Saving };
