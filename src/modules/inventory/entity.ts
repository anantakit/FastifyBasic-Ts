import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;

  @Column()
  expiryDate: string;

  @CreateDateColumn()
  createAt: string;

  @UpdateDateColumn()
  updateAt: string;
}
