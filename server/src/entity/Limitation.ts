import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from './Category';
import { User } from './User';

@Entity('limitations')
class Limitation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_Id: number;

  @OneToOne((type) => User, {
    eager: true,
  })
  @JoinColumn()
  user: User;
  
  @Column()
  category_Id: number;

  @OneToOne((type) => Category, {
    eager: true,
  })
  @JoinColumn()
  category: Category;

  @Column()
  limit: number;
}
export { Limitation };
