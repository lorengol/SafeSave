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
  user_id: number;

  @OneToOne((type) => User, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'user_id'})
  user: User;
  
  @Column()
  category_id: number;

  @OneToOne((type) => Category, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'category_id'})
  category: Category;

  @Column()
  limit: number;

  @Column()
  date_created: Date;

  @Column()
  date_deleted: Date;
}
export { Limitation };
