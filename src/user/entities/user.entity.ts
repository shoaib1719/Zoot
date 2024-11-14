import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  fullName: string;


  @Column({ type: 'varchar', length: 40 })
  email: string;


  @Column({ type: 'varchar' })
  password: string;
}
