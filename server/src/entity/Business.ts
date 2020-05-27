import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from './Category';

@Entity('businesses')
class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id: number;

  @OneToOne((type) => Category, {
    eager: true,
  })
  @JoinColumn({name: 'category_id'})
  category: Category;

  @Column()
  name: string;
}

export { Business };
