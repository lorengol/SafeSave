import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from './Category';

@Entity('tips')
class Tip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tip_content: string;

  @Column()
  category_id: number;

  @OneToOne((type) => Category, {
    eager: true,
  })
  @JoinColumn({name: 'category_id'})
  category: Category;
}
export { Tip };
