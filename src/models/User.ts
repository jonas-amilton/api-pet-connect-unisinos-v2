import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
class User extends Model {
  @PrimaryKey
  @Column
  id!: string;

  @Column
  email!: string;

  @Column
  username!: string;

  @Column
  password!: string;

  @Column
  isAdmin!: boolean;
}

export default User;
