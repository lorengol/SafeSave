import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('expenses')
class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expense_type: number;

  @Column()
  user_id: number;

  @Column()
  business_id: number;

  @Column()
  credit_card_id: number;
  
  @Column()
  bank_account_id: number;
}
export { Expense };
