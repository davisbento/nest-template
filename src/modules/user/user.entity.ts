import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 500 })
  public uuid: string;

  @Column({ length: 500 })
  public name: string;

  @Column()
  public password: string;

  @Column('varchar')
  public email: string;

  @BeforeInsert()
  public generateUuid() {
    this.uuid = v4();
  }
}
