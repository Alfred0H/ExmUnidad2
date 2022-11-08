import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'smartphone',
    timestamps: false
})
export class SmartPhone extends Model{

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