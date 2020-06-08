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
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;

  @Column()
  category_Id: number;

  @OneToOne((type) => Category, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  category: Category;

  @Column()
  limit: number;

  @Column()
  date_created: Date;

  @Column()
  date_deleted: Date;
}
export { Limitation };
