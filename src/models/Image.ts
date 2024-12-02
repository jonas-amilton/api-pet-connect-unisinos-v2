import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Pet from "./Pet";

@Table({
  tableName: "images",
  timestamps: true,
})
class Image extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => Pet)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  petId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  extension!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  size!: number;

  @Column({
    type: DataType.BLOB("long"),
    allowNull: false,
  })
  data!: Buffer;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt?: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updatedAt?: Date;

  @BelongsTo(() => Pet)
  pet!: Pet;
}

export default Image;
