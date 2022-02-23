import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() //auto increment column
    id: number;

    @ApiProperty() //shows this column on the docs
    @Column()
    firstName: string;

    @ApiProperty() //shows this column on the docs
    @Column()
    lastName: string;
}