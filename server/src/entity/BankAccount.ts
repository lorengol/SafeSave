import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Bank } from './Bank';
import { User } from './User';
import { BankBranch } from './BankBranch';

@Entity('bank_accounts')
class BankAccount {
  @PrimaryColumn()
  account_number: number;

  @Column()
  branch_number: number;

  @OneToOne((type) => BankBranch, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'branch_number'})
  branch:BankBranch;

  @Column()
  bank_id: number;

  @OneToOne((type) => Bank, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'bank_id'})
  bank: Bank;

  @Column()
  user_id: number;

  @OneToOne((type) => User, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: 'user_id'})
  user: User;

  @Column()
  current: number;

  @Column()
  first_Name: string;

  @Column()
  last_Name: string;

  @Column()
  social_security_number: string;
}
export { BankAccount };
