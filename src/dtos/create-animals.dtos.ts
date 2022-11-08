import { Length } from "class-validator";
import { IsNotEmpty, IsOptional } from "class-validator/types/decorator/decorators";

export class CreateAnimals{

    @Length(3, 50)
    @IsNotEmpty()
    name: string;


}