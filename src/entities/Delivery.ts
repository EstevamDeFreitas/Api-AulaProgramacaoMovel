import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("deliveries")
class Delivery {
    @PrimaryColumn()
    saleId !: string;

    @Column()
    dt_entrega !: Date;

    @Column()
    obs !: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}

export {Delivery};