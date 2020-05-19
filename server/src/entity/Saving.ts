import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('savings')
class Saving {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account_number: number;

  @Column()
  savings: number;
}
export { Saving };
