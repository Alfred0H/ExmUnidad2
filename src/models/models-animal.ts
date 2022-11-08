import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'animals',
    timestamps: false
})
export class Animal extends Model{ //hereda del paquete squelize-typescript

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement : true,
    })
    public id: number;

    @Column({
        type: DataType.STRING(250),
        allowNull : false,
        unique : true,
    })
    public name: string;
    
}