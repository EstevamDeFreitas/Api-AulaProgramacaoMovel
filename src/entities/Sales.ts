import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("sales")
class Sales {
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    productId !: string;

    @Column()
    userId !: string;

    @Column()
    total !: number;

    @Column()
    desc !: string;

    @Column()
    obs !: string;

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

export { Sales };