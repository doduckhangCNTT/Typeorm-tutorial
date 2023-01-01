import { BaseEntity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @UpdateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
