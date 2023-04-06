import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class ProductEntities {
  @PrimaryColumn()
  readonly id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  price!: string;

  @Column()
  url!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { ProductEntities };
