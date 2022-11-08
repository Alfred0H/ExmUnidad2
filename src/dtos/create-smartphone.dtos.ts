import { Length } from "class-validator";
import { IsNotEmpty, IsOptional } from "class-validator/types/decorator/decorators";

export class SmartPhone{

    @Length(3, 50)
    @IsNotEmpty()
    name: string;


}