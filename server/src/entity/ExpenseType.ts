import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('expense_type')
class ExpenseType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expense_type: string;
}

export { ExpenseType };
