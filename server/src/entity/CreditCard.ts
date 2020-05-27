import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User';

@Entity('credit_cards')
class CreditCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  card_number: number;

  @Column()
  card_holder_name: string;

  @Column()
  expiration_date: string;

  @Column()
  user_id: number;

  @OneToOne((type) => User, {
    eager: true,
  })
  @JoinColumn({name: 'user_id'})
  user: User;

  @Column()
  account_number: number;

  @Column()
  CVV: number;
}
export { CreditCard };
