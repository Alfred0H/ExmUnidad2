import { Length } from "class-validator";
import { IsNotEmpty, IsOptional } from "class-validator/types/decorator/decorators";

export class CreateCountry{

    @Length(3, 50)
    @IsNotEmpty()
    name: string;


}