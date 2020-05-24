import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('expenses')
class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id: number;

  @Column()
  user_id: number;

  @Column()
  business_id: number;

  @Column()
  credit_card_id: number;

  @Column()
  expense: number;
  
  @Column()
  bank_account_id: number;

  @Column()
  date: string;
}
export { Expense };
