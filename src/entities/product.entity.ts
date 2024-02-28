import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;
      
    @Column('varchar')
    name: string

    @Column('float')
    price: number

    @CreateDateColumn({ name: 'created_at'})
    createdAt: string
}