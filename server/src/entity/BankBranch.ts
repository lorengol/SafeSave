import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('bank_branches')
class BankBranches {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  bank_id: number;
}

export { BankBranches };
