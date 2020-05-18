import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('businesses')
class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id:number;

  @Column()
  name: string;
}

export {Business};