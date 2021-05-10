import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn, JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import {Comment} from './Comment';
import {Role} from "./Role";

@Entity()
export class User {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column({length: 255})
  email: string;

  @Column({length: 255})
  password: string;

  @Column({length: 255})
  username: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @ManyToMany(() => Role, role => role.users)
  @JoinTable({
    name: "user_role",
    joinColumn: {name: "user_id", referencedColumnName: "id"},
    inverseJoinColumn: {name: "role_id", referencedColumnName: "id"}
  })
  roles: Role[];
}