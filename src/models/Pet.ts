import { Column, Model, Table, DataType } from "sequelize-typescript";

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
    type: DataType.STRING,
    allowNull: false,
  })
  photo!: string;

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
}

export default Pet;
