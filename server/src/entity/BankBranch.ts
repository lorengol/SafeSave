import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('bank_branches')
class BankBranch {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  bank_id: number;
}

export { BankBranch };
