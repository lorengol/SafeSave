import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Bank } from './Bank';

@Entity('bank_branches')
class BankBranch {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  bank_id: number;

  @OneToOne((type) => Bank, {
    eager: true,
  })
  @JoinColumn()
  bank: Bank;
}

export { BankBranch };
