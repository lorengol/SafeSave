import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bank_branches')
class BankBranches {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  bank_id: number;
}

export { BankBranches };
