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
  category_Id: number;
  @OneToOne((type) => Category, {
    eager: true,
  })
  @JoinColumn()
  category: Category;
}
export { Tip };
