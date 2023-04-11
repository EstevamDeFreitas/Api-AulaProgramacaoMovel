import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { Category } from "../../entities/Category";

export class SaleEntities1681048563430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        //Category table
        await queryRunner.createTable(new Table({
            name: "categories",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }));

        //Product table
        await queryRunner.createTable(new Table({
            name: "products",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "url",
                    type: "varchar",
                },
                {
                    name: "price",
                    type: "numeric(10,2)",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }));

        //Sale table
        await queryRunner.createTable(new Table({
            name: "sales",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "productId",
                    type: "uuid",
                },
                {
                    name: "userId",
                    type: "uuid",
                },
                {
                    name: "obs",
                    type: "varchar",
                },
                {
                    name: "desc",
                    type: "varchar",
                },
                {
                    name: "total",
                    type: "numeric(10,2)",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }));

        //Delivery table
        await queryRunner.createTable(new Table({
            name: "deliveries",
            columns: [
                {
                    name: "saleId",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "obs",
                    type: "varchar",
                },
                {
                    name: "dt_entrega",
                    type: "timestamp",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("categories");
        queryRunner.dropTable("products");
        queryRunner.dropTable("deliveries");
        queryRunner.dropTable("sales");
    }

}
