import { IsOptional } from "class-validator";
import { CreateMechanicDto } from "./create.mechanic.dto";
import { MechanicCategoryEnum } from "src/enums/mechanic.enum";

export class UpdateMechanicDto extends CreateMechanicDto{
    @IsOptional()
    firstname: string;
    lastname: string;
    experience: string;
    age: number;
    quality: string;
    pricePerHour: number;
    bestWork: string;
    category: MechanicCategoryEnum;
    phoneNumber: number;
    free: true;
    
}