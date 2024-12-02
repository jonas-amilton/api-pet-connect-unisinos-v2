import { Column, Model, Table, DataType, HasMany } from "sequelize-typescript";
import Image from "./Image";

@Table({
  tableName: "pets",
  timestamps: true,
})
class Pet extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  age!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  size!: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updatedAt!: Date;

  @HasMany(() => Image)
  images!: Image[];
}

export default Pet;
