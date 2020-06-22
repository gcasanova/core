import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
