/* eslint-disable prettier/prettier */
//Entidades que representan las tablas en la BD,solo declaro las columnas y nada mas
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({unique : true})
  email: string;

  @Column()
  birthday: Date;

  @Column()
  password: string;
}